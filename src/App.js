import React, { Component } from 'react';
import NavBar from "./components/navbar";
import ScoreBar from "./components/scorebar";
import ScoreList from './components/scorelist'
import './App.css';

class App extends Component {
    //State to save scores and names
    state = {
        scores:[
          {
            id:123,
            score: 54,
            name: "Pirates",
            key: 45+"Pirates"
          },
          {
            id:1234,
            score: 45,
            name: "Ninjas",
            key: 54+"Ninjas"
          },
        ],
    };

    //Handle new scores. Started at addscore when Add Score button is pressed.
    handleNewScore = (name, score) => {
      const scores = [...this.state.scores];
      let timestamp = (new Date()).getTime();
      const newScore = {
          id:'score-' + timestamp,
          score: score,
          name: name,
          key: score+name
      };
      scores.push(newScore);
      
    //Sorting of the scores
      scores.sort(function (a, b) {
        if (a.score > b.score) {
            return -1;
        }
        if (b.score > a.score) {
            return 1;
        }
        return 0;
    });
    this.setState({ scores })
    };

    //Handle removing of Scores. Started at scorelist by pressing the trashcan.
    handleRemoveScore = (id) => {
      for (let i=0; i<this.state.scores.length; i++){
          let scoreId = this.state.scores[i].id;
          if (scoreId === id) {
              this.state.scores.splice(i,1)
          }
          this.setState( this.state )
      }
    };
  
    //Handle ordering of scores switches between descending and ascending.
    handleOrderScore = (e) => {
      this.state.scores.sort(function (a, b) {
        if (a.score<b.score){
          var temp = a
          a = b
          b = temp
        }
        if (a.score > b.score) {
            return -1;
        }
        if (b.score > a.score) {
            return 1;
        }
        return 0;
    });
      this.setState( this.state )
  };

    render() {
    return (
        <React.Fragment>
            <NavBar
            onOrderScores={this.handleOrderScore}
            />
            <main className="container">
                <div className="component-wrapper">
                    <ScoreList
                        scores={this.state.scores}
                        onRemoveScore={this.handleRemoveScore}
                    />
                </div>
            </main>
            <ScoreBar
                onNewScore={this.handleNewScore}
                onChangeOrder={this.handleOrderScore}
            />
        </React.Fragment>
    );
  }
}

export default App;
