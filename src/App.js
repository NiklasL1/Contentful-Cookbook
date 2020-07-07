import React from 'react';
import './App.css';
import { client } from './client'
import Posts from './components/Posts'

class App extends React.Component {
  state = {
    recipes: []
  }

  componentDidMount() {
    client.getEntries()
    .then((response) => {
      console.log(response)
      this.setState({
        recipes: response.items
      })
    })
    .catch(console.error)
  }

  render () {
    return (
      <div className="App">
        <div>
          <header>
            <div className="wrapper">
              <h1>My Cooking blog</h1>
            </div>
          </header>
          <main>
            <div className="wrapper">
              <Posts posts={this.state.recipes} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
