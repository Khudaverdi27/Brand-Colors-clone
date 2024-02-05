import Search from "./Search";
import Brand from "./Brand";
import { useMainContext } from "../context/MainContext";
import Copied from "./Copied";
import { lazy, Suspense } from "react";
import Download from "./Download";
import SkeletonLoad from "./Skeleton";

const LazyComponent = lazy(() => import("./Brand"));

export default function Home({ brand, download }) {
  const { copied, selectedBrands } = useMainContext();

  return (
    <main className="content">
      <header className="header">
        <Search />
        {selectedBrands.length > 0 && download && <Download />}
      </header>

      {copied && <Copied color={copied} />}

      <section className="brands">
        {brand?.map((b, i) => (
          <Suspense fallback={<SkeletonLoad />} key={i}>
            <LazyComponent b={b} />
          </Suspense>
        ))}
      </section>
    </main>
  );
}
