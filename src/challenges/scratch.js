import { useState } from "react";

const Common1 = () => {
  const [tasks, setTasks] = useState(["shopping", "running", "cooking"]);
  const [userInput, setUserInput] = useState("");

  const removeHandler = (index) => {
    const newArray = [...tasks];
    newArray.splice(index, 1);
    setTasks(newArray);
  };
  return (
    <div>
      <h1>Tasks</h1>

      <input type="text" value="value" s />
      <button onClick={getOne()}>add one</button>
      <h3>{userInput}</h3>
      {tasks.map((task, index) => {
        return (
          <>
            <h1 key={index}>{task}</h1>
            <button onClick={() => removeHandler(index)}>remove</button>
          </>
        );
      })}
    </div>
  );
};

const getOne = () => {
  const update = ({ event }) => {
    let newTask = setUserInput(event.target.value);
    return newTask;
  };
  const addHandler = () => {
    let newArray = [...tasks];
    newArray.push(update);
    setTasks(newArray);
  };
  update();
  addHandler();
};

{
  /* <button onClick={addHandler}>add one</button> */
}
export default Common1;
