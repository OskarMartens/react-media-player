import { ReactElement } from "react";
import { ISmallTrackBox } from "../../interfaces/Interfaces";
import "./SmallTrackBox.css";

interface ISmallTrackBoxProps {
  data: ISmallTrackBox;
}

export function SmallTrackBox({ data }: ISmallTrackBoxProps): ReactElement {
  return (
    <div className="small-track-box">
      <img src={data.cover_url} alt="album-cover" className="album-cover" />
      <div className="info">
        <h3 className="artist-info">{data.artist}</h3>
        <h4 className="track-info">{data.title}</h4>
      </div>
      <span className="material-symbols-outlined">play_circle</span>
    </div>
  );
}
