import "./CardPerformance.css";

function CardPerformance({ performance }) {
  return (
    <div className="main-cpm">
      <div className="video-yt">
        <iframe width="400" height="200" src={performance.detail}></iframe>
      </div>
      <h3 className="video-title">{performance.title}</h3>
    </div>
  );
}

export default CardPerformance;
