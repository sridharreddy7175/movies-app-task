import React, { useState } from "react";

const MoviesData = (props) => {
  const [isHide, setIsHide] = useState(false);
  const movieClick = () => {
    setIsHide(!isHide);
  };
  return (
    <div className="mt-5">
      <div
        className="movie_card"
        style={{ margin: "auto" }}
        onClick={() => movieClick()}
      >
        <img src={props?.moviesData?.Poster} alt="Avatar" />
        <h4 className="mt-1">
          <b>{props?.moviesData?.Title}</b>
        </h4>
        <p>{props?.moviesData?.imdbRating}</p>
        <p>{props?.moviesData?.Released}</p>
        <p>{props?.moviesData?.Genre}</p>
        <p>{props?.moviesData?.Director}</p>
        <p>{props?.moviesData?.Actors}</p>
        {isHide && <h4>{props?.moviesData?.Plot}</h4>}
      </div>
    </div>
  );
};

export default MoviesData;
