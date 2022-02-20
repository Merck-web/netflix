import React, { useState, useEffect } from "react";
import axios from "../lib/axios";
import requests from "../lib/requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);
  return (
    <header
      className='h-[848px] w-screen truncate relative z-0 object-contain text-white'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}>
      <div className='ml-[30px] pt-[140px] h-[190px] w-full'>
        <h1 className='max-w-[50%] text-5xl font-bold pb-5 '>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="max-w-[50%]">
          <button className='cursor-pointer text-white outline-none border-none font-bold rounded-md px-[2rem] mr-4 py-2 bg-gray-700 transitiom-all duration-500 hover:bg-gray-300 hover:text-black'>
            Play
          </button>
          <button className='cursor-pointer text-white outline-none border-none font-bold rounded-md px-[2rem] mr-4 py-2 bg-gray-700 transitiom-all duration-500 hover:bg-gray-300 hover:text-black'>
            MyList
          </button>
        </div>
        <h1 className='max-w-[50%] font-semibold text-sm pt-4 max-h-[360px]  h-20'>
          {movie?.overview}
        </h1>
      </div>
      <div className='bg-gradient-to-b from-transparent to-black h-[45.4rem]' />
    </header>
  );
}

export default Banner;
