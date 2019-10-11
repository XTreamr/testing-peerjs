import Peer from 'peerjs'

export default class PeerService {
  remoteStreams = {}

  constructor(id) {
    console.log(id)
    this.peer = new Peer(id)
    this.peer.on('open', function(id) {
      console.log('My peer ID is: ' + id);
    });

    this.peer.on('connection', (conn) => {
      conn.on('data', (data) => {
        // Will print 'hi!'
        console.log(data);
      });
    });

    this.peer.on('call', (call) => {
      call.answer()
      call.on('stream', (remoteStream) => {
        // Show stream in some <video> element.
        if (!!this.remoteStreams[remoteStream.id]) {
          return
        }
        
        this.remoteStreams[remoteStream.id] = remoteStream
        const video = document.createElement('video')
        video.autoplay = true
        video.srcObject = remoteStream
        document.body.appendChild(video)
      });
      // navigator.mediaDevices.getUserMedia({video: true, audio: true}, (stream) => {
      //   call.answer(stream); // Answer the call with an A/V stream.
      //   call.on('stream', (remoteStream) => {
      //     // Show stream in some <video> element.
      //   });
      // }, (err) => {
      //   console.error('Failed to get local stream', err);
      // });
    });
  }

  connectWithPeer = peerId => {
    const conn = this.peer.connect(peerId);
    conn.on('open', () => {
      conn.send('hi!');
    });
  }

  callToPeer = async peerId => {
    console.log('jijij')
    const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true})
    
    console.log(stream)
    // const video = document.createElement('video')
    // video.srcObject = stream
    // video.autoplay = true
    // document.body.appendChild(video)
    const call = this.peer.call(peerId, stream)
    call.on('stream', (remoteStream) => {
      // Show stream in some <video> element.
      console.log('remote stream', remoteStream)
    });
  }
}
