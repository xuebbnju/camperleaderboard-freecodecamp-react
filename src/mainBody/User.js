import React, { Component } from 'react';
class User extends Component{
	render(){

		return (

           <tr>
           <td>{this.props.count}</td>
           <td >
           <a href={"https://www.freecodecamp.com/"+this.props.user.username} target="_blank">
               <img src={this.props.user.img} className="img-rounded"  />
               <span>{this.props.user.username}</span>
           </a>
           </td>
           <td className="center">{this.props.user.recent}</td>
           <td className="center">{this.props.user.alltime}</td>

           </tr>


			)
	}
}
export default User;