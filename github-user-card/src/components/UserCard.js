import React, { Component } from 'react'

export class UserCard extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className="container">
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default UserCard
