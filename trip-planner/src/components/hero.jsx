import "../css/hero.css"
import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="heroImg" src={props.heroImg}></img>
        <div className="heroText">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <Link to={props.url} className={props.button}>{props.btnText}</Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
