import LoginPage from "../../src/containers/LoginPage";
import { useState } from "react";
import Loading from "../../src/components/Loading";

const Login = (props) => {
  const [pageLoading, setPageLoading] = useState(false);

  setTimeout(() => {
    setPageLoading(true);
  }, 1000);

  return !pageLoading ? <Loading /> : <LoginPage />;
};

export default Login;
