import { Url } from "../Utils/Url.js";
import { useState, useEffect } from "react";
const Main = (props) => {
  /*let cuisinesArray = props.info.cuisines;

  // Ensure cuisinesArray is an array and handle truncation
  if (Array.isArray(cuisinesArray)) {
    if (cuisinesArray.length > 3) {
      cuisinesArray = cuisinesArray.slice(0, 3).concat("...");
    }
  } else {
    cuisinesArray = [];
  }

  let cuisines = cuisinesArray.join(" ");*/
  const [cuisines, setCuisines] = useState("");

  useEffect(() => {
    let cuisinesString = props.info.cuisines.join(" ");
    if (cuisinesString.length > 30) {
      cuisinesString = cuisinesString.slice(0, 30) + "...";
    }
    setCuisines(cuisinesString);
  }, [props.info.cuisines]);

  function same() {
    let cuisinesString = props.info.cuisines.join(" ");
    if (cuisinesString.length > 30) {
      cuisinesString = cuisinesString.slice(0, 30) + "...";
    }
    setCuisines(cuisinesString);
  }

  const change = () => {
    setCuisines(props.info.cuisines.join(" "));
  };
  return (
    <>
      <div id="rescard" onMouseOver={change} onMouseLeave={same}>
        <img
          id="oneimg"
          src={Url + props.info?.cloudinaryImageId}
          width="100px"
          height="100px"
          alt="na"
        />
        <p>{props.info.name}</p>
        <p id="cuis">{cuisines}</p>
        <p>{props.info.avgRating} </p>
      </div>
    </>
  );
};
//console.log({ Url });
export default Main;
