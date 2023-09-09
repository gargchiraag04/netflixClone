import React, {useState, useEffect } from 'react'
import "./Home.scss"
//import MoviePic from './download.jpg'
import axios from 'axios'
const apiKey="0f8e13e9f449cc3260cd14ca58e46c26"
const url="https://api.themoviedb.org/3"
const imgUrl="https://image.tmdb.org/t/p/original"
const upcoming="upcoming"
const NowPlaying="now_playing"
const Popular="popular"
const TopRated="top_rated"
const Card=({img})=>(
  <img className='card' src={img} alt="cover"/>
)
const Row=({title,arr=[]})=>(
  <div className='row'>
    <h2>{title}</h2>

    <div >
    {
      arr.map((item,index)=>(
        <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>
      ))
    }   
    </div>
  </div>
)
const Home = () => {
  const [upcomingMovies,setUpcomingMovies]=useState([])
  const [nowPlaying,setNowPlaying]=useState([])
  const [popular,setPopular]=useState([])
  const [topRated,setTopRated]=useState([])
  useEffect(()=>{
    const fetchUpcoming=async()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
      setUpcomingMovies(results)
    };
    fetchUpcoming();

    const fetchNowPlaying=async()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${NowPlaying}?api_key=${apiKey}`)
      setNowPlaying(results)
    };
    fetchNowPlaying();

    const fetchPopular=async()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${Popular}?api_key=${apiKey}`)
      setPopular(results)
    };
    fetchPopular();


    const fetchTopRated=async()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${TopRated}?api_key=${apiKey}`)
      setTopRated(results)
    };
    fetchTopRated();
  },[])
  return (
    <section className='home'>
    <div className='banner' style={{
      backgroundImage:popular[0]?`url(${imgUrl}/${popular[0].poster_path})`:"rgb(16,16,16"
    }}>
      <img src={``} alt=""/>
      
    </div>
    <Row title={"Upcoming Movies"} arr={upcomingMovies}/>
    <Row title={"Now Playing"} arr={nowPlaying}/>
    <Row title={"Popular"} arr={popular}/>
    <Row title={"Top Rated"} arr={topRated}/>
    
    </section> 
  )
}

export default Home