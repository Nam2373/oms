import LoginPage from "../../src/containers/LoginPage";
import NoneAuthen from "../../src/components/Authentication/noneAuthen";
const Login = (props) => {
  return <LoginPage />;
};

Login.getLayout = (page) => <NoneAuthen>{page}</NoneAuthen>;
export default Login;
