import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Popular from "./components/Popular";
import Search from "./components/Search";
import Singlemovie from "./components/Singlemovie";
import Toprated from "./components/Toprated";
import Upcoming from "./components/Upcoming";
import Single_details from "./components/Single_details";

const appRouting = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Popular />,
      },
      {
        path: "/toprated",
        element: <Toprated />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
      },
      {
        path: "/Single-movie/:movieId",
        element: <Singlemovie />,
      },

      {
        path: "/searchpage",
        element: <Search />,
      },

      {
        path: "/single_details/:userid",
        // eslint-disable-next-line react/jsx-pascal-case
        element: <Single_details />,
      },
    ],
  },
]);

export default appRouting;
