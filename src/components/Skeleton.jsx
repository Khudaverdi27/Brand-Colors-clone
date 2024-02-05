import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function SkeletonLoad() {
  return (
    <SkeletonTheme height={"40px"} baseColor="#cccc" highlightColor="#ffff">
      <p>
        <Skeleton count={1} />
      </p>
    </SkeletonTheme>
  );
}

export default SkeletonLoad;
