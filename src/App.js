import ReactDOM from 'react-dom'
import Result from "./Components/Result"
import './App.css';

function App() {
  return (
    <div>
      <div id='headDiv'>
        <h1 id='head'>City Zip Code Search</h1>
      </div>
      <div id='formDiv'>
        <label>
          City Name:
          <input type="text" id="usercity"/>
        </label>
        <button onClick={printResults}>Search</button>
      </div>
    <div id='resultDiv'></div>
  </div>
  );
}

function printResults(){
  const cityname = document.getElementById('usercity').value.toUpperCase();
  fetch(`http://ctp-zip-api.herokuapp.com/city/${cityname}`)
  .then(response => {
    if (response.status !== 200) {
      throw new Error("Enter valid city");
    }
    return response.json();
  })
  .then(zips => {
    console.log(zips)
    const resultDiv = document.getElementById('resultDiv');
    const result = <Result 
      city={document.getElementById('usercity').value}
      zipcodes={zips}
    />
    ReactDOM.render(result, resultDiv);
  })
  .catch(error => {
    console.log("error", error)
  });
}

export default App;
