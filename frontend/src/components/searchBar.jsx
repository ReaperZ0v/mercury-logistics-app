import React from 'react';


class SearchBar extends React.Component {
    state = {
        trackingNumber: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.trackingNumber)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input type="text" 
                               placeholder="Tracking #" 
                               value={this.state.trackingNumber}
                               onChange={(e) => this.setState({ trackingNumber: e.target.value })} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;