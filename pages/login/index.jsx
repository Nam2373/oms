import LoginPage from "../../src/containers/LoginPage";
import { useState } from "react";
import Loading from "../../src/components/Loading";
import NoneAuthen from '../../src/components/Authentication/noneAuthen'
const Login = (props) => {
  const [pageLoading, setPageLoading] = useState(false);

  setTimeout(() => {
    setPageLoading(true);
  }, 1200);

  return !pageLoading ? <Loading /> : <LoginPage />;
};

Login.getLayout = (page) => (
  <NoneAuthen>
    {page}
  </NoneAuthen>
)
export default Login;
