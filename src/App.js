const App = () => {
  return (
    <div>
      <h1>Hello from app </h1>
      <Person
        name="Dan"
        age="34"
        job="junior developer"
        petname="hayley"
        type="cat"
      />

      <Person name="Anastasia" age="36" />
    </div>
  );
};

const Person = ({ name, age, job, petname, type }) => {
  return (
    <div className="person">
      <h2>
        Hello my name is {name} and I'm {age}
      </h2>
      <Job job={job} />
      <Pet petname={petname} type={type} />
    </div>
  );
};

const Job = (props) => {
  return <h2>My job is {props.job}</h2>;
};

const Pet = (props) => {
  return (
    <h2>
      My pet's name is {props.petname}, it's a {props.type}
    </h2>
  );
};

export default App;
