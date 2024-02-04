import React from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import MainContext from "./context/MainContext";

export default function App() {
  return (
    <MainContext>
      <Sidebar />
      <Content />
    </MainContext>
  );
}
