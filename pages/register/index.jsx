import dynamic from "next/dynamic";
import { useState } from "react";
import Loading from "../../src/components/Loading";

const RegisterPage = dynamic(() => import("../../src/containers/RegisterPage"));

const Register = (props) => {
  const [pageLoading, setPageLoading] = useState(false);

  setTimeout(() => {
    setPageLoading(true);
  }, 1000);

  return !pageLoading ? <Loading /> : <RegisterPage />;
};

export default Register;
