const Offers = ({ data, price, imgid, veg }) => {
  // console.log("data", data);
  // console.log("hc");
  const vegn =
    veg == 1
      ? "https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg"
      : "https://upload.wikimedia.org/wikipedia/commons/b/ba/Non_veg_symbol.svg";
  return (
    <div id="offers">
      <div id="timg">
        <img
          id="oimg"
          src={"https://media-assets.swiggy.com/swiggy/" + imgid}
        ></img>
      </div>
      <div id="tprices">
        {data}-₹{price} <img width="10px" height="10px" src={vegn}></img>
      </div>
      <div id="order">
        <button id="">Order</button>
      </div>
    </div>
  );
};
//console.log({ Url });
export default Offers;
//background-color: rgb(211, 110, 110);
