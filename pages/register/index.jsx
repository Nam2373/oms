import dynamic from "next/dynamic";
import { useState } from "react";
import Loading from "../../src/components/Loading";
import NoneAuthen from "../../src/components/Authentication/noneAuthen";
import RegisterPage from '../../src/containers/RegisterPage'

const Register = (props) => {
  const [pageLoading, setPageLoading] = useState(false);

  setTimeout(() => {
    setPageLoading(true);
  }, 1200);

  return !pageLoading ? <Loading /> : <RegisterPage />;
};

Register.getLayout = (page) => (
  <NoneAuthen>
    {page}
  </NoneAuthen>
)

export default Register;
