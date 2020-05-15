import React from "react"
import "./App.css"

const API_URL = "http://localhost:3001"

function App() {
  function update() {
    fetch(`${API_URL}/api/update`, {
      method: "POST",
      body: JSON.stringify({
        City: "Tokyo",
        CountryCode: "JPN",
        Pop: "12315271"
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <div className="App">
      <h1>The DB Upload Example</h1>

      <button onClick={update}>Update</button>
    </div>
  )
}

export default App
