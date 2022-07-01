import AuthGuard from "../src/components/Authentication/authen";
import MainLayout from "../src/components/Layout/mainLayout";
import { PATH } from "../src/constants/path";

const Index = () => {
  return <></>;
};

export default Index;

export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: PATH.HOME,
    },
  };
}
