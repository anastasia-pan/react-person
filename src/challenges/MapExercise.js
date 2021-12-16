import { useState } from "react";
import "./styles.css";

const MapExercise = () => {
  //   const people = ["bilbo", "frodo", "gandalf"];
  const [christmasMovies, setChristmasMovies] = useState([
    { movie: "point break", date: "1991" },
    { movie: "fellowship of the ring", date: "2001" },
    { movie: "die hard", date: "1989" },
  ]);
  //   return (
  //     <div>
  //       <h1>map method</h1>
  //       {people.map((person) => {
  //         return <Person key={index} name={person} />;
  //       })}
  //     </div>
  //   );
  // };

  return (
    <div>
      <h1> map method - movies</h1>
      {christmasMovies.map((film, index) => {
        return <Card key={index} name={film.movie} date={film.date} />;
      })}
    </div>
  );
};

const Card = (props) => {
  return (
    <div>
      <h2>movie: {props.name}</h2>
      <p> release date: {props.date}</p>
    </div>
  );
};

//   const Person = (props) => {
//     return <h1> {props.name}</h1>;
//   };

export default MapExercise;
