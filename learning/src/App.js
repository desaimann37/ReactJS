import logo from './logo.svg';
import './App.css';

function App() {
  //js
  var name = "Royal"
  var year = 2021
  var isActive = true
  var data = {
    name : "Nadiad",
    pincode : 387001
  }
  return (

    <>
    <div className='App'>
      <h1>
        Name = {name}
      </h1>
      <h2>
        Year = {year}
      </h2>
      <h3>
        Active ? {isActive == true ?"YES" : "NO"}
      </h3>
      <h1>pincode = {data.pincode}</h1>

    </div>

    <h1>Hello</h1>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
