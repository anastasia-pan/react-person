import { useState } from "react";

const IfStatement = () => {
  return (
    <div>
      <User name="David" isLoggedIn={false} timeofDay="day" />
      <User name="Ben" isLoggedIn={false} timeofDay="night" />
    </div>
  );
};

const User = ({ name, isLoggedIn, timeofDay }) => {
  return (
    <div>
      <LoggedIn name={name} isLoggedIn={isLoggedIn} />
      <Time timeofDay={timeofDay} />
    </div>
  );
};

const LoggedIn = (props) => {
  if (props.isLoggedIn === true) {
    return <h2>{props.name} is logged in.</h2>;
  } else {
    return <h2>{props.name} is not logged in.</h2>;
  }
};

const Time = (props) => {
  if (props.timeofDay === "night") {
    return <h2>It's dark right now</h2>;
  } else {
    return <h2>It's sunny outside.</h2>;
  }
};

export default IfStatement;
