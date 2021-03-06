import React from 'react';
import './App.css';
import Squirrel from './Components/Squirrel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        squirrels:[],
    }
  }
  
  // add a componentDidMount lifecycle method to fetch data from the API
componentDidMount = () => {
    let appToken = 'nOhBZbaSnaZIXhxSkF4KBK8qw'; // see below to secure your App Token
    fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json?$$app_token='+appToken+'&running=true')
      .then(response => response.json()) // convert response to JSON
      .then(data => {
        // code to execute once data is defined
        console.log (data)
        this.setState(state => {
            this.state.squirrels = data
            return state
        })
      })
      .catch(e => {
        alert(e);
      })
  }

  
render() {
    return (
      <div className="App">
        <h1>2018 NYC Squirrel Survey Data</h1>
        <h3>there are currently {this.state.squirrels.length} squirrels </h3>
        {this.state.squirrels.map(squirrel => <Squirrel data={squirrel}/>)}
      </div>
    );
  }
}

export default App;
