import React, { useState } from "react";
import Axios from "axios";
import MoviesData from "./MoviesData";

const MoviesForm = () => {
  let [title, setTitle] = useState("");
  let [moviesData, setMoviesData] = useState([]);
  let [isChecking, setIsChecking] = useState(false);
  let [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      let result = await Axios.get(
        `https://www.omdbapi.com/?t=${title}&apikey=${process.env.REACT_APP_API_KEY}`
      );
      console.log("result--->", result.data.Error);
      setIsChecking(true);
      setIsLoading(false);
      setMoviesData(result.data);
    } catch (err) {
      console.log("error", err);
    }
    setTitle("");
  };
  return (
    <div>
      <h5 className="mt-3">Movies form</h5>
      <input
        type="text"
        style={{ margin: "auto" }}
        className="form-control w-25 mt-2"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <button
          className="mt-3 btn btn-success"
          style={{ margin: "auto" }}
          onClick={() => handleClick()}
        >
          Submit
        </button>
      )}
      {isChecking && !moviesData.Error && (
        <MoviesData moviesData={moviesData} />
      )}
      {isChecking && moviesData.Error && <h5 className="mt-5">Movie not found!</h5>}
    </div>
  );
};

export default MoviesForm;
