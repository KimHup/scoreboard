import React, {Component} from 'react';


class AddScoreForm extends Component {
    createScore = (e) =>  {
        e.preventDefault();
        //This refs method seems to be outdated but im using it here!
        let name = this.refs.scorename.value;
        let score = parseInt(this.refs.scorescore.value, 10);
        //checks if the text input is empty
        if(typeof name === 'string' && name.length > 0 && score) {
            this.props.addScore(name, score);
            //resets after use
            this.refs.scoreForm.reset();
        }
        
    };

    render  = () =>  {
        return(
            <form className="form-inline" ref="scoreForm" onSubmit={this.createScore}>
                <div className="form-group">
                    <label for="portfolioItem">
                        Add Name:
                        <input type="text" id="name" placeholder="Name" ref="scorename" className="form-control m-2" />
                        Add Score:
                        <input type="number" id="score" placeholder="Score" ref="scorescore" className="form-control m-2" />
                    </label>
                </div>
                <button type="submit" className={"btn btn-primary"}>Add Score</button>
            </form>
        );
    };
}

export default AddScoreForm;
