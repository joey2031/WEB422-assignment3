import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
class Loading extends React.Component {
    render() {
        return (
            <Spinner animation="border" variant="primary" />
        )
    }

}
export default Loading;

/*

 <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>


*/