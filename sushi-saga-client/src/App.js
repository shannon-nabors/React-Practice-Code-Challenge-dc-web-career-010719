import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      allSushi: [],
      displayedSushi: [],
      eatenSushi: [],
      totalSpent: 0
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushiData => this.setState({
        allSushi: sushiData,
        displayedSushi: sushiData.slice(0,4)
      })
    )

  }

  chooseDisplay = () => {
    let id = this.state.displayedSushi.slice(-1)[0].id
    this.setState(
      id != 100 ? {displayedSushi: this.state.allSushi.filter(sushi => sushi.id > id && sushi.id < id + 5)} : {displayedSushi: this.state.allSushi.slice(0,4)}
    )
  }

  handleEatSushi = (e) => {
    let eaten = this.state.displayedSushi.find(sushi => sushi.id.toString() === e.currentTarget.id)
    if ((100 - this.state.totalSpent) - eaten.price >= 0) {
      this.setState({
        eatenSushi: [...this.state.eatenSushi, eaten],
        totalSpent: this.state.totalSpent + eaten.price
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          chooseDisplay={this.chooseDisplay}
          displayedSushi={this.state.displayedSushi}
          handleEatSushi={this.handleEatSushi}
          eatenSushi={this.state.eatenSushi}
        />
        <Table
          eatenSushi={this.state.eatenSushi}
          totalSpent={this.state.totalSpent}
        />
      </div>
    );
  }
}

export default App;
