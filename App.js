import "./App.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import Applayout from "./Components/Applayout.js";
import Routed from "./Components/Routed.js";
//data in utilities
<Applayout />; //includes header and outlet
function App() {
  return (
    <RouterProvider router={Routed}></RouterProvider>
    /*  <Card id={{id :"hc yo"}}> */
  );
}

export default App;
//features
//lazyloading
//export default restr;
//Odata = "hc";
//it is prop ki info,which is odatat info
//console.log(Odata.info.name);
//https://www.geeksforgeeks.org/user/himanshuchaaqlm/
//https://www.naukri.com/code360/profile/30bd32c4-40ac-441a-b0a5-ecf3c449aae6
// {restr.restaurant.map((restaurants)=>(
// <Mcard />))}
//<Mcard info=restaurant.info/>}
/*<Mcard key={restr.restaurants[0].info.id} info={restr.restaurants[0].info} /> */
//https://unsplash.com/napi/users/iamhc/photos?page=1&per_page=20
//https://unsplash.com/napi/users/iamhc/photos?order_by=views&page=1&per_page=20&stats=true
