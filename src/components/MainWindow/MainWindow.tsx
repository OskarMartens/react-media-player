import React, { ReactElement } from "react";
import data from "../../data/data.json";

import MusicPlayer from "../MusicPlayer/MusicPlayer";
import TrackList from "../Tracklist/Tracklist";
import "./MainWindow.css";

export default function MainWindow(): ReactElement {
  return (
    <div className="main">
      <h2 className="header">Playlist - Moody</h2>
      <section className="main-section">
        <TrackList data={data} />
        <MusicPlayer key={data[3].id} data={data[3]} />
      </section>
    </div>
  );
}
