import "antd/dist/antd.css";
import { useState } from "react";
import Loading from "../src/components/Loading";

function MyApp({ Component, pageProps }) {
  const [pageLoading, setPageLoading] = useState(false);

  setTimeout(() => {
    setPageLoading(true);
  }, 1200);
  const getLayout = Component.getLayout ?? ((page) => page);

  return !pageLoading ? <Loading /> : getLayout(<Component {...pageProps} />);
}

export default MyApp;
