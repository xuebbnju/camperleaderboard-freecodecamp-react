import React, { Component } from 'react';
 import $ from 'jquery';
class HeadCol extends Component{
	constructor(){
     super();
     this.update=this.update.bind(this);


	}

    
	update(sort,event){
    if(!$("#"+sort).hasClass('sorted')){
         $('th.sorted').removeClass('sorted');
         $('#'+sort).addClass('sorted');
         this.props.updateData(sort);


    }


	}

	render(){

		return (
           
             <thead>
             <tr>
                <th>#</th>
                <th>Camper Name</th>
                <th id="recent" className="center  sorted " onClick={()=>this.update("recent")}>Points in past 30 days</th>
                <th id="alltime" className="center" onClick={()=>this.update("alltime")}>All time points</th>

             </tr>

             </thead>

			)
	}
}
export default HeadCol;