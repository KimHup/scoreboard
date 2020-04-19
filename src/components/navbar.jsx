import React, {Component} from 'react';


class NavBar extends Component {
    render () {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <h2>Scoreboard </h2>
                <h7 className="font-italic" >A highscore scoreboard for a game</h7>
                <div className="form-group">
                    <button onClick={() =>this.onOrderScores()} className={"btn btn-primary"} >Change Order</button>
                </div>
 
            </a>
        </nav>
    );
    }

    onOrderScores= () =>{
        return this.props.onOrderScores()
    }

}



export default NavBar;
