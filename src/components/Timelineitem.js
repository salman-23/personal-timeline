import "../styles.css";

const Timelineitem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      <span className="circle"></span>
    </div>
  </div>
);

export default Timelineitem;
