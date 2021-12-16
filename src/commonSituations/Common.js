import { useState } from "react";

const Common = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);
  const [userInput, setUserInput] = useState("");

  //a functio to add a number at the end of a new array, root uses it through a button
  //
  const addHandler = () => {
    const newArray = [...numbers];
    newArray.push(numbers[numbers.length - 1] + 1);
    setNumbers(newArray);
  };

  //a function to remove an item by splicing (parameters index and number of items (1))
  //index is being informed by return (root) below (from the map method)
  const removeHandler = (index) => {
    const newArray = [...numbers];
    newArray.splice(index, 1);
    setNumbers(newArray);
  };

  const update = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <h1>numbers</h1>
      <input type="text" onChange={update} />
      {numbers.map((num, index) => {
        return (
          <>
            <h1 key={index}>{num}</h1>
            <button onClick={() => removeHandler(index)}>remove this</button>
          </>
        );
      })}

      <button onClick={addHandler}> add one</button>
    </div>
  );
};

export default Common;
