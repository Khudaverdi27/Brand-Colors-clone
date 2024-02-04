import { createContext, useContext, useState } from "react";
import BrandsData from "../brands.json";
import { useEffect } from "react";
const Context = createContext();

function MainContext({ children }) {
  const brands = [];

  Object.values(BrandsData).map((brand) => brands.push(brand));

  const [brand, setBrand] = useState(brands);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [copied]);

  useEffect(() => {
    setBrand(
      brands.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  const data = {
    brand,
    setBrand,
    selectedBrands,
    setSelectedBrands,
    copied,
    setCopied,
    search,
    setSearch,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export const useMainContext = () => useContext(Context);

export default MainContext;
