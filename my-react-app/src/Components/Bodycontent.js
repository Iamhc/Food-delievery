import "../App.css";
import React from "react";
import Main from "./Main.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

const Body = () => {
  const [Od, setodata] = useState([]);
  const [search, setsearch] = useState([]);
  const [input, inputvalue] = useState([]);
  const [rawdata, setrdata] = useState([]);
  const funct = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.627905&lng=77.4092323&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.627905&lng=77.4092323&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.67905&lng=77.4092323&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      //  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // kolkata niche wla
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5744&lng=88.3629&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.627905&lng=77.4092323&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      //delhi
      //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7&lng=77.1&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    //option to get data for different cities differently
    let json = await data.json();
    console.log(json);
    console.log("rendered");
    //json=json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants+json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    setodata(
      json.data.cards[1]?.card.card.gridElements?.infoWithStyle?.restaurants
    );
    setsearch(
      json.data.cards[1]?.card.card.gridElements?.infoWithStyle?.restaurants
    );
    setrdata(json.data);
    //  console.log(
    //    json.data.cards[1]?.card.card.gridElements?.infoWithStyle?.restaurants +
    //    json.data.cards[1]?.card.card.gridElements?.infoWithStyle?.restaurants
    //);
    /*  const ndat = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.627905&lng=77.4092323&restaurantId=348936&catalog_qa=undefined&submitAction=ENTER"
      );
      //new restro items  api
      const jn = await ndat.json();
      console.log(jn);*/
  };
  useEffect(() => {
    funct();
  }, []);
  //const [load,setload]=useState([<Shimmer/>])

  if (Od == undefined || Od.length == 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div id="nav">
        <input
          value={input}
          id="input"
          onChange={(e) => {
            inputvalue(e.target.value);
          }}
        />
        <button
          id="search"
          onClick={() => {
            const searched = Od.filter((res) =>
              res.info.name.toLowerCase().includes(input.toLowerCase())
            );
            if (searched.length === 0) {
              // setsearch([])
              // setload([<Notfound />])
              console.log("not found");
            } else {
              setsearch(searched);
            }
          }}
        >
          search
        </button>

        <button
          id="filter"
          onClick={() => {
            const Updated = Od.filter((res) => res.info.avgRating > 4.5);
            let Mupdated = [...Od].sort(
              (a, b) => b.info.avgRating - a.info.avgRating
            );
            console.log(Updated);
            setsearch(Updated);
          }}
        >
          filter
        </button>
      </div>
      <div id="city">{rawdata.cards[2].card.card.title} :</div>
      <div id="container">
        {search.map((rest) => (
          <Link to={"restaurants/" + rest.info.id} key={rest.info.id}>
            <Main key={rest.info.id} info={rest.info} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default Body;
