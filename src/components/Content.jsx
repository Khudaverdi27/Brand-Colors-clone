import Search from "./Search";
import BrandsData from '../brands.json'
import { useState } from "react";
import Brand from "./Brand";
export default function Content() {
    const brands = []

    Object.values(BrandsData).map(brand => brands.push(brand))

    const [brand, setBrand] = useState(brands)

    return (
        <main className="content">
            <header className="header">
                <Search />
            </header>
            <section className="brands">
                {brand.map(b => <Brand b={b} />)}
            </section>
        </main>
    )
}
