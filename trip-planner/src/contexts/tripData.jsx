import "../css/trip.css";

function Tripdata(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="image" src={props.img}></img>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default Tripdata
