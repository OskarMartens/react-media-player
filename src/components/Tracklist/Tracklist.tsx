import { ReactElement } from "react";
import { SmallTrackBox } from "../SmallTrackbox/SmallTrackBox";

import "./Tracklist.css";
import { ITrackData } from "../../interfaces/Interfaces";

interface ITrackDataProps{
  data: ITrackData[];
}

export default function TrackList({data}: ITrackDataProps): ReactElement {
  console.log(data);
  return (
    <>
      <div className="tracklist-main">
          {data.map((track) => (
            <SmallTrackBox key={track.id} data={track} />
          ))}
      </div>
    </>
  );
}
