import { ReactElement } from "react";
import { ITrackData } from "../../interfaces/Interfaces";
import "./MusicPlayer.css";

interface ITrackDataProps {
  data: ITrackData;
}

export default function MusicPlayer({ data }: ITrackDataProps): ReactElement {
  return (
    <div className="music-player-main">
      <img className="music-player-image" src={data.cover_url} alt="" />
      <div className="current-track">
        <span className="material-symbols-outlined">add_circle</span>
        <div className="current-track-info">
          <p>{data.artist}</p>
          <p>{data.title}</p>
        </div>
        <span className="material-symbols-outlined">favorite</span>
      </div>
      <section className="track-nav">
        <span className="material-symbols-outlined">repeat</span>
        <span className="material-symbols-outlined">fast_rewind</span>
        <span className="material-symbols-outlined">play_circle</span>
        <span className="material-symbols-outlined">fast_forward</span>
        <span className="material-symbols-outlined">shuffle</span>
      </section>
    </div>
  );
}
