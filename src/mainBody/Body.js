import React, { Component } from 'react';
import HeadCol from './HeadCol.js';
import Users from './Users.js';
 import $ from 'jquery';
class Body extends Component{


	constructor(){
		super();
		this.state={
          userList:[],
          sortBy:'recent',

		}
		this.updateData=this.updateData.bind(this);

	}
	getData(){
      $.ajax({
         url:this.props.api+this.state.sortBy,
         dataType:'json',
         cache:false,
         success:function(data){

            this.setState({userList:data});
         }.bind(this),
         error:function(xhr, status, err) {
        console.error(this.props.apiroot, status, err.toString());
      }.bind(this)


      });

	}
	updateData(sort){
		this.setState({sortBy:sort},this.getData);      
	}
	componentDidMount(){
		this.getData();
	}
	render(){

		return (

        <div className="container">
            <div className="row">
	            <div className="col-md-12">
                    <table  border="1" width="100%">
                     <caption>Leaderboard</caption>
                     <HeadCol updateData={this.updateData}/>
                     <Users userList={this.state.userList} />
                    </table>

	            </div>
            </div>
        </div>


			)
	}
}
export default Body;
