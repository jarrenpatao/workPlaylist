import React from 'react';
import './App.css';

const iframeStyle = {
  height: "100%",
  width: "100%",
  overflow: "hidden",
  background: "transparent",
  frameborder: 0
}

function App() {
  return (
    <div className="App">
      <iframe allow="autoplay *; encrypted-media *;" style={iframeStyle}sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/working-man/pl.u-jV89b1Wuq7kBKj"></iframe>
    </div>
  );
}

export default App;
