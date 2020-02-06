import React from 'react';
import { withRouter } from 'react-router-dom'; // will give us access to a "history" object on this.props so that we can programmatically change routes
import {Table, Pagination} from 'react-bootstrap';
class Sales extends React.Component {
    constructor(props){ // They didnt tell me to but I added a constructor.
      super(props);
      this.state = {
        sales: [],
        currentPage: 1
      }
    }
    
    getData(page){

    }
    render() {
        return <div><h1>Sales</h1></div>
    }
}
export default withRouter(Sales);