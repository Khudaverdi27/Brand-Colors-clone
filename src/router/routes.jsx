import Collection from "../components/Collection";
import Layout from "../components/Layout";

export const routes = [
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/brands/:slugs",
    element: <Collection />,
  },
];
