import React, { Component } from "react";
import ReactPlayer from "react-player";

class Player extends React.Component {
  state = {
    url: null,
    playing: true,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  };

  render() {
    const {
      url,
      playing,
      volume,
      muted,
      loop,
      played,
      loaded,
      duration,
      playbackRate
    } = this.state;
    return (
      //   <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" playing />

      <div className="player-wrapper">
        <ReactPlayer
          ref={this.ref}
          className="react-player"
          width="318px"
          height="270px"
          // url={url}
          url="https://www.youtube.com/watch?v=62Gzbd4qu5E"
          playing={false}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}
          onReady={() => console.log("onReady")}
          onStart={() => console.log("onStart")}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onBuffer={() => console.log("onBuffer")}
          onSeek={e => console.log("onSeek", e)}
          onEnded={this.onEnded}
          onError={e => console.log("onError", e)}
          onProgress={this.onProgress}
          onDuration={this.onDuration}
        />
      </div>
    );
  }
}
export default Player;
