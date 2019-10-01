import React, { Component } from 'react'
import axios from 'axios'
import UserCard from './components/UserCard'
import './App.css';



export class App extends Component {
  constructor(){
    super();
    this.state = {
      userData: {},
      followerData: []
    };
  }

  componentDidMount(){
    console.log('CDM')
    axios.get('https://api.github.com/users/mxxt1')
    .then(response => {
      console.log(response.data);
      this.setState({ userData: response.data})
    })
    .catch(error => {
      console.log(error)
    });

    console.log(`CDU`)
    axios.get('https://api.github.com/users/mxxt1/followers')
    .then(response => {
      console.log(`followers: `,response)
      this.setState({followerData: response.data})
    })
    .catch(error => {
      console.log(error)
    })
  };


  //iniitally used componentDidUpdate, but it triggers on every single update and kept making api calls. Like use effect watching followerData
  // componentDidMount(){
  //   console.log(`CDU`)
  //   axios.get('https://api.github.com/users/mxxt1/followers')
  //   .then(response => {
  //     console.log(`followers: `,response)
  //     this.setState({followerData: response.data})
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })

  // }
  
  
  
  render(){
    console.log(`render`)
    return (
      <div className="App">
      <UserCard key={this.state.userData.id} name={this.state.userData.login}/>
       {this.state.followerData.map(item => (
        <UserCard key={item.id} name={item.login} />
       ))}
      </div>
    );
  }
}

export default App




