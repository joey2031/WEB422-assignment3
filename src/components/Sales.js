import React from 'react';
import { withRouter } from 'react-router-dom'; // will give us access to a "history" object on this.props so that we can programmatically change routes
import {Table, Pagination} from 'react-bootstrap';
class Sales extends React.Component {
    constructor(props){ 
      super(props);
      this.state = {
        sales: [],
        currentPage: 1
      }
      this.previousPage = this.previousPage.bind(this);
    }
    
    getData(page){
      return new Promise(function(resolve, reject){
        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', `https://stormy-fjord-91108.herokuapp.com/api/sales?page=${page}&perPage=10`);
        
        httpRequest.onreadystatechange = function(){ // I think I did this right.
          if(httpRequest.readyState === 4){
            if(httpRequest.status === 200){
              resolve(JSON.parse(httpRequest.responseText));
            } else{
              reject("Error getting Data");

            }
          }

        }

      });

    }

   componentDidMount(){ // Called after a component is mounted.
    this.getData(this.state.currentPage)
    .then((data)=>{
      for(let i = 0; i < data.sales.length; i++){ // check to see if this is ok
        this.state.sales.push(data.sales[i]);
      }
      this.state.sales = data.sales;
    })
    .catch((err)=>{
      console.log(err);
    });
   }

   previousPage(){
     if(this.state.currentPage > 1){
       this.getData(this.state.currentPage-1); //  the above is the case, invoke the "getData()" method with the value of (currentPage in the state - 1)
     }
     // not sure if/when we are suspose to use set state.

   }


    render() {
        return <div><h1>Sales</h1></div>
    }
}
export default withRouter(Sales);