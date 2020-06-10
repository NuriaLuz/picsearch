import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'

class App extends React.Component {


  onSearchSubmit(term){
    axios.get('https://api.unsplash.com/search/photos', {
      params: {query: term},
      headers: {
        Authorization: 'Client-ID e4d40704ad373cba1cbd7572f1fa154067833acfc4510343ea2ccd23e34cd9f7'
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar  onSubmit = {this.onSearchSubmit}/>
      </div>
    )
  }
};

export default App;