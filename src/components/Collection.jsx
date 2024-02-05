import { useParams } from "react-router-dom";
import { useMainContext } from "../context/MainContext";
import Home from "./Home";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

function Collection() {
  const [newBrand, setNewBrand] = useState([]);
  const params = useParams();
  const { brand } = useMainContext();

  useEffect(() => {
    const slugArray = params.slugs.split(",");
    const filter = brand.filter((b) => slugArray.includes(b.slug));

    setNewBrand(filter);
  }, [params]);

  return (
    <>
      <Sidebar />
      <Home brand={newBrand} download={false} />
    </>
  );
}

export default Collection;
