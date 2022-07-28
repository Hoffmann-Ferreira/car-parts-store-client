import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import { Person } from "./interfaces";

function App() {
  const [people, setPeople] = useState<Person[]>([
    {
      name: "Andrei",
      age: 28,
    },
    {
      name: "Wanessa",
      age: 29,
    },
  ]);

  return (
    <div className="App">
      <div>
        {people.map((elem, index) => <Card person={elem} key={index}/>)}
      </div>
    </div>
  );
}

export default App;
