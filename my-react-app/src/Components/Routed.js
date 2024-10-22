import Applayout from "./Applayout";
import Restromenu from "./restromenu";
import Card from "./Card";
import Error from "./Error";
import Body from "./Bodycontent";
import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import { lazy, Suspense } from "react";
const Aboutlazy = lazy(() => import("./About"));
const Routed = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>not here yet</h1>}>
            <Aboutlazy />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Card name="contact" />,
      },
      {
        path: "/more",
        element: <Card name="more" />,
      },
      {
        path: "/restaurants/:resId",
        element: <Restromenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
console.log(createBrowserRouter.element);
export default Routed;
