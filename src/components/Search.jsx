import { IoMdSearch } from "react-icons/io";

export default function Search() {
    return (
        <div className="search">
            <div className="icon">
                <IoMdSearch />
            </div>
            <input type="text" placeholder="Search brands" />
        </div>
    )
}
