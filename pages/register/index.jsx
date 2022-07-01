import NoneAuthen from "../../src/components/Authentication/noneAuthen";
import RegisterPage from "../../src/containers/RegisterPage";

const Register = (props) => {
  return <RegisterPage />;
};

Register.getLayout = (page) => <NoneAuthen>{page}</NoneAuthen>;

export default Register;
