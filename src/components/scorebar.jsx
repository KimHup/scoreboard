import React, {Component} from 'react';
import AddScoreForm from "./addscore";

class ScoreBar extends Component {
    render () {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <h2>Add your score </h2>
            </a>
            <div className="navbar navbar-light m-2 ">
                <AddScoreForm
                    /* A popup button where you add portfolios*/
                    addScore = {this.props.onNewScore}
                    orderScore = {this.props.onChangeOrder}
                />
            </div>
        </nav>
    );
    }
}

export default ScoreBar;
