import { IoMdSearch } from "react-icons/io";
import { useMainContext } from "../context/MainContext";

export default function Search() {
  const { search, setSearch } = useMainContext();
  return (
    <div className="search">
      <div className="icon">
        <IoMdSearch />
      </div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search brands"
      />
    </div>
  );
}
