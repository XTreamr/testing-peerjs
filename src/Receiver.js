import React, { useEffect } from 'react'
import PeerService from './PeerService'

function App() {
  useEffect(() => {
    const peerService = new PeerService('pacoRampasVazquez')
    
  }, [])
  return (
    <h1>I am a receiver</h1>
  );
}

export default App