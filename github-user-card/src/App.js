import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import './App.css';
import styled from 'styled-components';



const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  padding: 2%;
  justify-content: space-between;
`;



export class App extends Component {
  constructor(){
    super();
    this.state = {
      userData: {},
      followerData: []
    };
  }

  async getUser(){
    const user = await axios('https://api.github.com/users/mxxt1');
    console.log(user.data);
    return user.data;
  }

  async getFollowers(){
    const followers = await axios('https://api.github.com/users/mxxt1/followers');
    console.log(followers);
    return followers.data;
  }

  componentDidMount(){

    this.getUser()
    .then(user => this.setState({userData: user}))
    .catch(error => console.log(`getUser Error: `, error));
    
    this.getFollowers()
    .then(followers => this.setState({followerData: followers}))
    .catch(error => console.log(`getFollowers Error: `, error));
    };
   

  render(){
      console.log(`render`)
      return (
        <AppContainer className="App">
        <h1>{this.state.userData.name}'s Github Followers</h1>
        <UserCard key={this.state.userData.id} data={this.state.userData}/>
        {this.state.followerData.map(item => (
          <UserCard key={item.id} data={item} />
        ))}
        </AppContainer>
      );
  }
}//end component

export default App




//Keep as notes: 

    // console.log('CDM')
    // axios.get('https://api.github.com/users/mxxt1')
    // .then(response => {
    //   console.log(response.data);
    //   this.setState({ userData: response.data})
    // })
    // .catch(error => {
    //   console.log(error)
    // });

    // console.log(`CDM2`)
    // axios.get('https://api.github.com/users/mxxt1/followers')
    // .then(response => {
    //   console.log(`followers: `,response)
    //   this.setState({followerData: response.data})
    // })
    // .catch(error => {
    //   console.log(error)
    // })
  





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
  
  
  





