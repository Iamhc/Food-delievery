import Header from "./Header";
import { Outlet } from "react-router-dom";
const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default Applayout;
