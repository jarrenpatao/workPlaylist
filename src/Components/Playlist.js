import React from "react";

const iframeStyle = {
  width: "100%",
  maxWidth: "660px",
  overflow: "hidden",
  background: "transparent"
}

function Playlist() {
  return (
    <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style={iframeStyle} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/longboarding-at-sunset/pl.u-kv9lbRaTWAdDmv"></iframe>
  )
}

export default Playlist;