import React from 'react';
import './style/main.scss';
import Card from "./components/Card";
import CONTENT from "./data.json";

function App() {
  return (
    <div className="App">
      <h1>
        Ты сегодня покормил кота?
      </h1>
      <div className="content">
        {CONTENT.data.map(card => (
          <Card
            {...card}
            {...CONTENT.staticData}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
