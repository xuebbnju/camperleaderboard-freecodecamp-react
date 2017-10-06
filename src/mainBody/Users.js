import React, { Component } from 'react';
import User from './User.js';
class Users extends Component{
	render(){
       var userlist=this.props.userList.map(function(data,index){
               console.log(typeof(data));
            return (
               <User user={data} key={data.username} count={index+1}/>
                   
            	);


       }.bind(this));
		return (

            <tbody>
            {userlist}
            </tbody>


			)
	}
}
export default Users;