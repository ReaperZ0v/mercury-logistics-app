import React from 'react'
import './searchButton.css'


class SendButton extends React.Component {
    render() {
        return (
            <div className="d-grid gap-2">
                <button className="btn btn-info" type="button"><h3><b>Track</b></h3></button>
            </div>
        )
    }
}

export default SendButton;