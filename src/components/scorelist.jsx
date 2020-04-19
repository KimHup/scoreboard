import React, {Component} from 'react';
import { Trash } from 'react-bootstrap-icons';
class ScoreList extends Component {
    render=()=>{
        return (
            <div className="container">
                <ul className="text-center">
                    {
                        Object.keys(this.props.scores).map(function(score) {
                            return (
                                <div ref= {this.props.scores[score].score} >
                                    <li className="list-group-item m-2">
                                        <div className="navbar navbar-light  ">
                                            <div className="col-lg">
                                                <h1>Name: {this.props.scores[score].name}</h1>
                                            </div>
                                            <div className="col-lg">
                                                <h1>Score: {this.props.scores[score].score}</h1>
                                            </div>
                                            <div className="col-sm">
                                                <button onClick= {() => this.onRemoveScore(this.props.scores[score].id)} className="close"> <Trash /></button>
                                            </div>
                                        </div>
                                        
                                    </li>
                                </div>)
                        }.bind(this))
                    }
                </ul>
            </div>
        );
    };
    //The remove Score button in /App
    onRemoveScore(id){
        return this.props.onRemoveScore(id)
    }
}



export default ScoreList;
