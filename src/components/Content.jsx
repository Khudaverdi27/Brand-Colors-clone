import Search from "./Search";
import Brand from "./Brand";
import { useMainContext } from "../context/MainContext";
import Copied from "./Copied";
export default function Content() {
  const { brand, copied } = useMainContext();

  return (
    <main className="content">
      <header className="header">
        <Search />
      </header>
      {copied && <Copied color={copied} />}
      <section className="brands">
        {brand.map((b, i) => (
          <Brand key={i} b={b} />
        ))}
      </section>
    </main>
  );
}
