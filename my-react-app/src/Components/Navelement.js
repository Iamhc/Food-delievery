import { Link } from "react-router-dom";
//import Useloc from "./Useloc";
//import { useLocation } from "react-router-dom";

const Navelement = () => {
  // const location = useLocation();
  return (
    <div id="navel">
      <Link to="/">
        <div id="home">Home</div>
      </Link>
      <Link to="/about">
        <div id="about">About</div>
      </Link>
      <Link to="/contact">
        <div id="contact">Contact</div>
      </Link>
      <Link to="/more">
        <div id="more">More</div>
      </Link>
    </div>
  );
};

export default Navelement;
