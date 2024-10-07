import { useLocation } from "react-router-dom";

const Useloc = () => {
  const location = useLocation();
  location.pathname === "/"
    ? (document.getElementById("home").style.borderBottom = "1px solid black")
    : (document.getElementById("home").style.borderBottom = "none");
};
/* if (location.pathname === "/") {
    document.getElementById("home").style.color = "";
    document.getElementById("home").style.borderBottom = "1px solid black";
  } */
export default Useloc;
