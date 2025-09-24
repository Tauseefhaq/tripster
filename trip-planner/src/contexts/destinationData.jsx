import bali1 from "../assets/bali_1.jpg";
import bali2 from "../assets/bali_2.jpeg";

function DestinationData(props) {
  return (
    <div className={props.class}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="image">
        <img alt="img" src={props.img1}></img>
        <img alt="img" src={props.img2}></img>
      </div>
    </div>
  );
}

export default DestinationData;
