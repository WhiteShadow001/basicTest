import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [id, setId] = useState("");

  const loadAll = ()=>{
    fetch('https://localhost:7090/Main/getstudents', {
      method: "GET",
      headers: {
        'Accept': 'plain/text',
        'Content-Type': 'plain/text'
        },
    }).then((res) => res.json())
      .then(data => {
        console.log("Data received");
        console.log(data);
        })
  }


  const loadOne = ()=>{
    fetch('https://localhost:7090/Main/getstudent', {
      method: "POST",
      body:parseInt(id),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
    }).then((res) => res.json())
      .then(data => {
        console.log("Data received");
        console.log(data);
        })
  }

  const changeId = (e) =>{
    setId(e.target.value);
  }

  return (
    <div className="App">
      <h1>Basic</h1>

      <button
      onClick={loadAll}
      >
        Load All
      </button>

      <input type="text" value={id} onChange={(e)=>{
        changeId(e)
      }
        } />

        <button onClick={loadOne}>Load One</button>

    </div>
  );
}

export default App;
