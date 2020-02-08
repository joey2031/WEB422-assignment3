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
    render() {
        return <div><h1>Sales</h1></div>
    }
}
export default withRouter(Sales);