import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../lib/requests";

const Home = () => {
  return (
    <div className='min-h-screen text-white bg-black'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner />
      <div className='truncate'>
        <Row
          title='Netflix Originals'
          fetchUrl={requests.fetchNetflixOrignals}
          isLargeRow
        />
        <Row title='Trending' fetchUrl={requests.fetchTrending} />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
        <Row title='Horror Movies' fetchUrl={requests.fetchDocumentaries} />
      </div>
    </div>
  );
};

export default Home;
