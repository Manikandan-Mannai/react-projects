import React, { useState } from "react";
import List from "./List";
import Data from "./Data";

function App() {
  const [person, setperson] = useState(Data);

  return (
    <div className="App">
      <h1 className="logo">Birthday Reminder</h1>
      <section className="container">
        <h1>{person.length} Birthdays today</h1>
        <List person={person} />
        <button onClick={() => setperson([])}>CLEAR ALL</button>
      </section>
    </div>
  );
}

export default App;
