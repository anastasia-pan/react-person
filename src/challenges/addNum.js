import { useState } from "react";

const AddNum = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <button onClick={() => setNum(num + 1)}> add one </button>
      <button onClick={() => setNum(num - 1)}> subtract one </button>
      <h1>{num}</h1>
    </div>
  );
};
export default AddNum;
