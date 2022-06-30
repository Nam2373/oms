import { useState } from 'react';
import AuthGuard from '../src/components/Authentication/authen';
import Loading from '../src/components/Loading'

const Home = () => {
  const [pageLoading, setPageLoading] = useState(false);

  setTimeout(() => {
    setPageLoading(true);
  }, 1200);

  return !pageLoading ? <Loading /> : <h1>Home Page</h1>;
}

Home.getLayout = (page) => (
  <AuthGuard>
    {page}
  </AuthGuard>
)

export default Home
