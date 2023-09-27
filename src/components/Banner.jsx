import React,{useState, useEffect} from "react";
import './Banner.css';
import tmdbAxiosInstance from './tmdbAxiosinstance';

function Banner({fetchUrl}){
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movie, setMovie] = useState([]);
    const fetchData = async () => {
        const { data } = await tmdbAxiosInstance.get(fetchUrl);
        if (data.results) {
          setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
        }
      };
      
    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div className="banner"
        style={{
            height:'600px',
            backgroundImage:`url(${base_url}/${movie?.backdrop_path})`,
            backgroundSize:'cover',
        }}><div className="banner_content">
            <h1>{movie?.name}</h1>
            <h2>{movie?.overview?.slice(0,280)}...</h2>
            </div></div>
    )
}

export default Banner