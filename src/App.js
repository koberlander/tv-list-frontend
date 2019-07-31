import React, {Component} from 'react';


class App extends Component{

  // HAD HERE TO TEST BACKEND
  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/programs', {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'}
  //     }
  //    )
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  //
  // }

  render(){
    return (
      <div className="App">
        {'Here are some words.'}
      </div>
    )
  }
}

export default App;
