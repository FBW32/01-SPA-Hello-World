import React from "react"
const data = require('./data.json');
// console.log(data)

function App() {
  // use {} ---> for ${}

  let stylingCard = { margin: "20px auto", padding: "0px", width: "300px", display: "flexbox", justifyContent: "center", alignItems: "center", border: "1px white solid", borderRadius: "25% 0 25% 0", backgroundColor: "rgb(82,188,66)", };

  let stylingImage = { display: "block", margin: "auto", padding: "10px", width: "200px", height: "200px", textAlign: "center" };

  let stylingWriting = { textAlign: "center" }

  let authors = data.map(item => {
    return (
      <div key={item.id} style={stylingCard}>
        <h2 style={stylingWriting}>{item.author}</h2>
        <img src={item.download_url} alt="lol" style={stylingImage} />
        <h3 style={stylingWriting}>Client: {item.id}</h3>
      </div>
    )
  });
  return authors;
}

export default App; 