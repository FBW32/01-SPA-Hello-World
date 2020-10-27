import React from "react";
import data from "./data";

// let authors= data.map(card => {
//   return (
//     <div className="App">
//       <h2>{card.author}</h2>
//       <img src={card.download_url}/>

//     </div>
//   )
// })
function App() {
  let authors= data.map(card => {
    return (
      <div className="App">
        <h2>{card.author}</h2>
        <img src={card.download_url} width="400" height="400" disply="flex"/>
  
      </div>
    )
  })
  return (
    <div>
      {authors}
    </div>
  )
}

export default App;