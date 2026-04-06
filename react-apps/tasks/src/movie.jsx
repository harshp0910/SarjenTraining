import React, { useState, useEffect } from 'react'
import axios from 'axios';
function Movie() {
    const [movie,setMovie] = useState(null)
    const [name,setName] = useState('')
    useEffect(() => {
    
      axios.get(`https://www.omdbapi.com/?apikey=837d6d44&t=${name}`)
        .then(response => {
          setMovie(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });
    
  }, [name]);

    return ( <>
        Name: 
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      {movie && movie.Title && (
        <div>
          <div>Title: {movie.Title}</div>
          <div>Year: {movie.Year}</div>
          <div>Actors: {movie.Actors}</div>
          
        </div>
      )}
    </> );
}

export default Movie;