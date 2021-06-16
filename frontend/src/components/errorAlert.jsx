import React from 'react';


class ErrorAlert extends React.Component {
    render() {
        return (
            <div className="alert alert-danger" role="alert">
                <b>Invalid</b> Tracking Number, <b>No</b> Match Found...
            </div>
        )
    }
}

export default ErrorAlert;