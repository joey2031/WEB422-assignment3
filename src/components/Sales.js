import React from 'react';
import { withRouter } from 'react-router-dom'; // will give us access to a "history" object on this.props so that we can programmatically change routes
import { Table, Pagination } from 'react-bootstrap';
class Sales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sales: [],
      currentPage: 1
    }
    this.previousPage = this.previousPage.bind(this);
  }

  getData(page) {
    return new Promise((resolve,reject)=>{
      fetch(`https://stormy-fjord-91108.herokuapp.com/api/sales?page=${page}&perPage=10`)
       .then(result => result.json())
       .then((data) =>{
         resolve(data);
       })
      .catch((err) => {
        reject(err);
      });
    });
    
  }

  componentDidMount() { // Called after a component is mounted.
    this.getData(this.state.currentPage)
      .then((data) => {
        console.log(data);

        this.setState({ // short form
          sales: data
        })

      })
      .catch((err) => {
        console.log(err);
      });
  }

  previousPage() {
    if (this.state.currentPage > 1) {
      this.getData(this.state.currentPage - 1).then((data) => {
        this.setState({
          sales: data
        })
      }).catch(() => { }); //  the above is the case, invoke the "getData()" method with the value of (currentPage in the state - 1)
    }
  }


  render() {
  if(this.state.sales.length > 0){
    return <div><h1>Sales</h1>
    <ul>
    {this.state.sales.map((sale)=>{
      return <li key={sale._id}> {sale.customer.email} </li>
    })}
    </ul>
    
    </div>
  }else{
    return null; // "loading "
  }
    
  }
}
export default withRouter(Sales);