import { useEffect, useState } from "react";

const useGetData = (resid) => {
  const [Newdata, setnewdata] = useState([]);

  const fetchit = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.627905&lng=77.4092323&restaurantId=" +
        resid.resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setnewdata(json);
  };

  useEffect(() => {
    fetchit();
  }, []);

  return Newdata;
};

export default useGetData;
