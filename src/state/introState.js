import { useState } from "react";

// use hook, it first returns the starting value of our state
//useState then gives us the function setCount(), the value of stae is count
// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   );
// };
const IntroState = () => {
  const [persons, setPersons] = useState([
    { name: "Dan", age: 33 },
    { name: "Ben", age: 12 },
  ]);
  const greeting = (value) => {
    alert("hello " + value);
  };

  let [num, setNum] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {!loggedIn ? (
        <div>
          <h1>you're not logged in</h1>
          <button onClick={() => setLoggedIn(true)}> log in</button>{" "}
        </div>
      ) : (
        <div>
          <h1>you're not logged in</h1>
          <button onClick={() => setLoggedIn(true)}> log in</button>{" "}
        </div>
      )}
    </div>
  );

  const Person = (props) => {
    return (
      <div>
        <h1 onClick={() => props.func(props.name)}>{props.name}</h1>
      </div>
    );
  };
};
export default IntroState;
