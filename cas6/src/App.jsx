import { useState, useEffect } from "react";

export function App() {
  const [car, setCar] = useState({ model: "BMW", year: 2010 });
  const [days, setDays] = useState(["Monday", "Tuesday", "Wednesday"]);
  const [person,setPerson] = useState({firstName:"",lastName:""});

  useEffect(() => {
    console.log(person);
  }, [person]);

  function newCar() {
    setCar({
      ...car,
      model: "Yugo",
      // year: 2020,
    });
  }
  function addDays(){
    setDays(["Sunday",...days,"Thursday"])
  }
  return (
    <div id="app">
      <input
        type="text"
        placeholder="Enter First Name"
        value={person.firstName}
        onChange={(e)=>{setPerson({...person,firstName:e.target.value})}}
      />
      <br/>
      <br/>
      <input
        type="text"
        placeholder="Enter Last Name"
        value={person.lastName}
        onChange={(e)=>{setPerson({...person,lastName:e.target.value})}}
      />
      <h2>Car:</h2>
      <p>Model:{car.model} </p>
      <p>Year: {car.year} </p>
      <button onClick={newCar}>Buy new Car</button>
      <hr />
      <ul>
        {days.map((day, i) => (
          <li key={i}>{day}</li>
        ))}
      </ul>
      <button onClick={addDays}>Add Days</button>
    </div>
  );
}
