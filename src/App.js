import React from 'react';
import './App.css';

const iframeStyle = {
  width: "100%",
  maxWidth: "660px",
  overflow: "hidden",
  background:"transparent"
}

function App() {
  return (
    <div className="App">
      <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style={iframeStyle} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/working-man/pl.u-jV89b1Wuq7kBKj" title="Jarren's Work Playlist"></iframe>
    </div>
  );
}

export default App;
