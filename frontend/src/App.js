import React from 'react';
import SearchBar from './components/searchBar';
import SearchButton from './components/searchButton';
import mercury from './api/mercury'
import Dashboard from './components/Dashboard'
import box from './box.svg';
import MyChart from './components/Charts'

class App extends React.Component {
	state = {
		results: []
	}

  onSearchSubmit = async (search) => {
	  const response = await mercury.post('/track/', {
			trk_number: search
	  	}
	  )

	  this.setState({
		  results: response.data
	  })
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: "20%"}}>
		  <div className="row">
		  	<img src={box} alt="" width="200" height="200" style={{marginLeft: "2%", marginTop: "-10%"}} />
		  </div>
		  <SearchBar onSubmit={this.onSearchSubmit} />

		  {console.log(this.onSearchSubmit)}
		  {/* <br />
		  <SearchButton /> */}

		  <Dashboard data={this.state.results} />
		  <MyChart />
      </div>
    )
  }
}

export default App;
