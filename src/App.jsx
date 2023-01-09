import * as React from 'react'


function getTitle(title){
  return title;
}

function App() {
  //you can do something
  //const title = 'แปปซี่';
  //const titlee = 'ใหม่';
  //const welcom = {
  //  greeting: "Hey",
  //  titleee: "React",
  //}

  return (
    <div>
      <div>
        <h1>555</h1>
        <h1>Hello world </h1>
        <h1>Hello world, {title} </h1>
        <h1>Hello world, {titlee} </h1>
        <h1>{welcom.greeting} , {welcom.titleee}</h1>

        <label htmlFor="search">search: </label>
        <input type="text" id="search" />

        <label htmlFor="button"><button>555</button></label>

      </div>   
    </div>
  )
}

export default App
