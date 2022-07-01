import AuthGuard from "../src/components/Authentication/authen";
import MainLayout from "../src/components/Layout/mainLayout";

const Home = () => {
  return <h1>Home Page</h1>;
};

Home.getLayout = (page) => (
  <AuthGuard>
    <MainLayout>{page}</MainLayout>
  </AuthGuard>
);

export default Home;
