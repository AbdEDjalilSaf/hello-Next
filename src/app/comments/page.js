
// import axios from "axios"
import React from "react"


const pageComment = async () => {
 

// const respo = await axios.get("https://jsonplaceholder.typicode.com/todos");
// console.log("right");
// console.log(response.data.title);
// console.log("left");
const response = await fetch("https://jsonplaceholder.typicode.com/todos"); 
const respo = await response.json();
console.log(respo);
console.log("the length is : ",respo.length);
  

    return (
      <div>
<h3>the start</h3>
{respo.map((reso) => <h2 key={reso.id}>{reso.userId}</h2>)}
        <h3>the end</h3>
      </div>
    )
  }
  
  export default pageComment