import { useEffect, useState } from "react";
import Offers from "./Offers";
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useGetData from "../Utils/useGetData.js";
import Onlinestatus from "./onlinestatus.js";

const Restromenu = () => {
  const resid = useParams();

  const Nadata = useGetData(resid);
  console.log(resid);
  const reso = 352738;
  const [rdata, setdata] = useState([]);

  useEffect(() => {
    setdata(Nadata);
  });
  if (rdata.length == 0) {
    return <Shimmer />;
  }

  //   console.log(rdata);
  if (Onlinestatus === false) {
    return "no internet";
  }

  return (
    <div id="menu">
      <div id="restrocard">
        <div id="resname">{rdata.data?.cards[2].card.card.info.name}</div>
        <div>
          <p>
            <img
              id="cuimg"
              src={
                "https://media-assets.swiggy.com/swiggy/" +
                rdata.data.cards[2].card.card.info.cloudinaryImageId
              }
            ></img>
          </p>
          <div id="cuisinestwo">
            cuisines: {rdata.data?.cards[2].card.card.info.cuisines.join(",")}
            -₹
            {rdata.data?.cards[2].card.card.info.costForTwo / 100}
          </div>
        </div>
      </div>
      <div>Menu-:</div>
      <div id="reg">
        {
          //rdata.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR?.cards[1]?.card.card.itemCards.map(
          rdata.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR?.cards[2].card.card.itemCards?.map(
            (rest) => {
              //  console.log(<Offers props={rest}></Offers>);

              return (
                <Offers
                  id="offer"
                  key={rest.card.info.id}
                  data={rest.card.info.name}
                  price={
                    rest.card.info.price / 100 ||
                    rest.card.info.defaultPrice / 100
                  }
                  veg={
                    rest.card.info.isVeg ||
                    rest.card.info.itemAttribute.vegClassifier
                  }
                  imgid={rest.card.info.imageId}
                />
              );
              //  return <div key={rest.card.info.id}>{rest.card.info.name}</div>;
            }
          ) ||
            rdata.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR?.cards[2].card.card.categories[0].itemCards?.map(
              (rest) => {
                //  console.log(<Offers props={rest}></Offers>);

                return (
                  <Offers
                    id="offer"
                    key={rest.card.info.id}
                    data={rest.card.info.name}
                    price={
                      rest.card.info.price / 100 ||
                      rest.card.info.defaultPrice / 100
                    }
                    veg={
                      rest.card.info.isVeg ||
                      rest.card.info.itemAttribute.vegClassifier
                    }
                    imgid={rest.card.info.imageId}
                  />
                );
                //  return <div key={rest.card.info.id}>{rest.card.info.name}</div>;
              }
            )
        }
      </div>
    </div>
  );
};

export default Restromenu;
