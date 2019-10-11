import React, { useState, useEffect } from 'react'
import PeerService from './PeerService'

let peerServiceSender

function App() {
  const [value, setValue] = useState('pacoRampasVazquez')
  
  useEffect(() => {
    peerServiceSender = new PeerService('xxxx-sender')
  }, [])

  const handleValueChange = e => {
    setValue(e.target.value)
  }

  const handleClickConnect = () => {
    peerServiceSender.connectWithPeer(value)
    
    peerServiceSender.callToPeer(value)
  }

  return (
    <div>
      <h1>I am a sender</h1>
      <input onChange={handleValueChange} value={value} />
      <button onClick={handleClickConnect}>Connect</button>
    </div>
  );
}

export default App