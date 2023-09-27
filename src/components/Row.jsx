import React, { useEffect, useState } from "react";
import tmdbAxiosInstance from './tmdbAxiosinstance';
import "./Row.css";

function Row({ title, fetchUrl, isPoster }) {
    const [allMovies, setAllMovies] = useState([]);
    const fetchData = async () => {
            const { data } = await tmdbAxiosInstance.get(fetchUrl);
            setAllMovies(data.results || []);
    };
    useEffect(() => {
        fetchData();
    }, []);

    const base_url = "https://image.tmdb.org/t/p/original/";

    return (
        <div>
            <h1 className="title">{title}</h1>
            <div className="all_movies">
                {allMovies?.map((item) => (
                    <img loading="lazy"
                        className={`${isPoster&&'movie_large'} movie`}
                        src={`${base_url}/${isPoster?item.poster_path:item.backdrop_path}`}
                        alt="no image"
                        
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
