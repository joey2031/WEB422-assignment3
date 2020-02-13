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
    this.nextPage = this.nextPage.bind(this);
  }

  getData(page) {
    return new Promise((resolve, reject) => {
      fetch(`https://stormy-fjord-91108.herokuapp.com/api/sales?page=${page}&perPage=10`)
        .then(result => result.json())
        .then((data) => {
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
        this.setState({ // update state
          sales: data,
          currentPage: this.state.currentPage - 1
        })
      }).catch((err) => {
        console.log(err);
      }); //  the above is the case, invoke the "getData()" method with the value of (currentPage in the state - 1)
    }
  }

  nextPage() {
    this.getData(this.state.currentPage + 1).then((data) => {
      this.setState({
        sales: data,
        currentPage: this.state.currentPage + 1
      })

    }).catch((err) => {
      console.log(err);
    });

  }

// Im geting warnings/errors in the console.
  render() {
    if (this.state.sales.length > 0) {
      return (
        <div>
          <Table hover>
            <thead>
              <tr> 
                <th>Customer</th>
                <th>Store Location</th>
                <th>Number of Items</th>
                <th>Sale Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.sales.map(data =>
            <tr key={data._id} onClick={()=>{this.props.history.push(`/sales/${data._id}`)}}> 
                  <td>{data.customer.email}</td>
                  <td>{data.storeLocation}</td>
                  <td>{data.items.length}</td>
                  <td>{new Date(data.saleDate).toLocaleDateString()}</td>
                </tr>
              )}
            </tbody>
          </Table>
          <Pagination>
            <Pagination.Prev onClick={this.previousPage} />
            <Pagination.Item>{this.state.currentPage}</Pagination.Item>
            <Pagination.Next onClick={this.nextPage} />
          </Pagination>
        </div>
      );
    } else {
      //return null; // NOTE: This can be changed to render a <Loading /> Component for a better user experience
      return ( // never actually saw this work, need to test it somehow- Not working
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>

      );

    }

  }

}
export default withRouter(Sales);