// import React from 'react';
// Import {useState}
import React, {useState} from 'react';

import './css/App.css';

function App() {

  // [name of state, name of the function used to update the state].
  const [movies, setMovies] = useState(
    [
      {
        name: "The Matrix",
        year: "1999"
      },
      {
        name: "Harry Potter",
        year: "2001"
      },
      {
        name: "Toy Story",
        year: "1995"
      }
    ]
  );

  const [filteredMovies, setFilters] = useState([]);

  // const is required for function, class components dont require const!
  const changeMovie = () => {
    console.log("Change movie clicked");
    
    // ... (spread operator) copies array
    const newState = [...movies];

    newState[1].name = "Gladiator";
    newState[1].year = "2000";

    setMovies(newState);

    // setMovies([
    //   {
    //     name: "Gladiator",
    //     year: "2000"
    //   }
    // ]);

    //   let item = {
    //     ...movies[1],
    //     name: "Gladiator",
    //     year: "2000"
    // }
    // console.log(item)

  }

  // (e) can be called whatever...
  // target.value - the input value entered
  const searchMovies = (e) => {
    console.log(e.target.value)

    //** */ -1 returned if not found ie. search am is position 1, search as is -1
    // const animal = "camel";
    // console.log(animal.indexOf(e.target.value));

    // const test = ["cat", "dog", "camel"];
    //** */ .filter creates the loop
    // const myFilter = test.filter((animal) => {
    //** */ Hard coded search
    // return animal.indexOf('a') > 0
    //** */ Input Search
    // return animal.indexOf(e.target.value) >= 0
    // True // False //True, myFilter = ["cat", "camel"]

    const getState = [...movies];

    const myFilter = getState.filter((movie) => {
    return movie.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
      
    })
    console.log(`myFilter ${myFilter}`);
    console.log(myFilter)

    setFilters(myFilter);
    console.log(`filteredMovies ${filteredMovies}`)
    console.log(filteredMovies);
  
  }

  return (

    <div className="container">
      <h1>React Hooks</h1>
      
      <h1>Movies:</h1>

      {movies.map( (movieMyVarName) => {
        return <h3>{movieMyVarName.name} was released in {movieMyVarName.year}</h3>
      } )}
      
      <h1>Search for Movies</h1>
      <input type="text" onChange={searchMovies} />

      {filteredMovies.map( (filterMyVarName) => {
        return <h3>{filterMyVarName.name}</h3>
      })}

      {/* this. keyword not required in {}, only required on class components */}

      {/* comment out for now (A) */}
      {/* <button onClick={changeMovie}>Change Movie</button> */}
    </div>
    
  );
}

export default App;
