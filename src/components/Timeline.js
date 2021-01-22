import timeLineData from "../data";
import Timelineitem from "./Timelineitem";

import "../styles.css";

const Timeline = () =>
  timeLineData.length > 0 && (
    <div className="timeline-container">
      {timeLineData.map((data, id) => (
        <Timelineitem data={data} key={id}></Timelineitem>
      ))}
    </div>
  );

export default Timeline;
