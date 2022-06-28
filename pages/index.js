import { useState } from 'react';
import Loading from '../src/components/Loading'

const Home = () => {
  const [pageLoading, setPageLoading] = useState(false);

  setTimeout(() => {
    setPageLoading(true);
  }, 1200);

  return !pageLoading ? <Loading /> : <h1>Home Page</h1>;
}

export default Home

// export async function getServerSideProps() {
//   return {
//     redirect: {
//       permanent: false,
//       destination: '/register'
//     }
//   }
// }