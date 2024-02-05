import React from "react";

import MainContext from "./context/MainContext";
import { useRoutes } from "react-router-dom";
import { routes } from "./router/routes";
import Layout from "./components/Layout";

export default function App() {
  const RouterComponent = () => useRoutes(routes);
  return (
    <MainContext>
      <RouterComponent>
        <Layout />
      </RouterComponent>
    </MainContext>
  );
}
