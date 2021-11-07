import React from "react";
import "./MovieCard.css";

function MovieCard({movie}) {
  return (
    <div className="card" >
      <img src={movie.poster} alt="" className="card__img" />
      <div className="card__body">
        <h4 className="card__title">{movie.title} </h4>
        <p className="card__description">{movie.overview}</p>
        <button className="card__btn">Watch it now</button>
      </div>
    </div>
    );
  }

export default MovieCard;

/*    version 1 <div class="card" style={{width:`500px`}}>
      <img class="card-img-top" src={movie.poster} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{movie.title}</h5>
        <p class="card-text">{movie.overview}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{movie.genres}</li>
      </ul>
      <div class="w-100 p-3" >
        <div class="card-body">
          <a href="#" class="card-link">Movie link</a>
          <a href="#" class="card-link">{movie.release_date}</a>
        </div>
      </div>
    </div>*/

    