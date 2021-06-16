import React from 'react';
import check from './check.svg'
import remove from './remove.svg'
import ErrorAlert from './errorAlert'
import { Chart } from 'react-charts'


class Dashboard extends React.Component {
    checkFragile() {
        if (this.props.data[0].fragile === true) {
            return <img
             src={check} alt="" widht="32" height="32" />
            
        } else if (this.props.data[0].fragile === false) {
            return <img src={remove} alt="" widht="32" height="32" />

        } else {
            return <h5>...</h5>
        }
    }

    checkCurrency() {
        if (this.props.data[0].shippment_charges_currency === "USD") {
            return <h5>$</h5>

        } else if (this.props.data[0].shippment_charges_currency === "EUR") {
            return <h5>€</h5>

        } else if (this.props.data[0].shippment_charges_currency === "ILS") {
            return <h5>₪</h5>

        } else {
            return <h5>...</h5>
        }
    }

    checkStatus() {
        if (this.props.data[0].status === "Picked Up") {
            return <h5><span className="badge bg-primary">{this.props.data[0].status}</span></h5>

        } else if (this.props.data[0].status === "In-Transit") {
            return <h5><span className="badge bg-warning">{this.props.data[0].status}</span></h5>

        } else if (this.props.data[0].status === "Arrived") {
            return <h5><span className="badge bg-dark">{this.props.data[0].status}</span></h5>

        } else if (this.props.data[0].status === "Shipped") {
            return <h5><span className="badge bg-success">{this.props.data[0].status}</span></h5>

        } else {
            return <h5>...</h5>
        }
    }

    checkResults = () => {
        if (this.props.data.error) {
            return (
                <ErrorAlert />
            )

        } else if (this.props.data[0]) {
            return (
                <div>
                    <table className="ui multi line table">
                    <thead>
                        <tr>
                            <th>sender E-mail</th>
                            <th>creation date</th>
                            <th>timestamp</th>
                            <th>sender</th>
                            <th>receiver</th>
                            <th>tracking number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.data[0]['sender_email']}</td>
                            <td>{this.props.data[0]['creation_date']}</td>
                            <td>{this.props.data[0]['timestamp']}</td>
                            <td>{this.props.data[0]['sender']}</td>
                            <td>{this.props.data[0]['receiver']}</td>
                            <td>{this.props.data[0]['tracking_number']}</td>
                        </tr>
                    </tbody>
                </table>

                <table className="ui multi line table" style={{marginTop: "-1.3%"}}>
                    <thead>
                        <tr>
                            <th>destination address</th>
                            <th>shippment charges</th>
                            <th>currency</th>
                            <th>status</th>
                            <th>weight in kg</th>
                            <th>fragile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.data[0].destination_address}</td>
                            <td>{this.props.data[0].shippment_charges}</td>
                            <td>{this.checkCurrency()}</td>
                            <td>{this.checkStatus()}</td>
                            <td>{this.props.data[0].weight_kg}</td>
                            <td>{this.checkFragile()}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            )

        } else {
            return (
                console.log("welcome")
            )
        }
    }

    render() {
        return (
            <div className="content" style={{marginTop: "4%", marginLeft: "0%"}}>
                {this.checkResults()}
            </div>
        )
    }
}

export default Dashboard;