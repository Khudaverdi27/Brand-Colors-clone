import { useMainContext } from "../context/MainContext";
import Home from "./Home";

export default function Content() {
  const { brand } = useMainContext();

  return <Home brand={brand} download={true} />;
}
