import React from "react";
const Home = React.lazy(() => import("../../Pages/Home"));

const routes = [
  // please place all public routes with key tpye: public
  {
    path: "/",
    exact: true,
    name: "Home",
    Component: Home,
    type: "public",
  },
];

export default routes;
