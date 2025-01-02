import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GeneralMovies = () => {
  const [movies, setMovies] =  useState([]);

  useEffect(() => {
    const fetchAllmovies = async () => {
      try {
        const res = await axios.get("http://localhost:8800/movies");
        setMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllmovies();
  }, []);

  console.log(movies);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/movies/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Today Screening Movie List</h1>
      <div className="books">
        {movies.map((book) => (
          <div key={book.id} className="book">
            <img src={book.cover} alt="" />
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>Show Time🎞: {book.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralMovies;
