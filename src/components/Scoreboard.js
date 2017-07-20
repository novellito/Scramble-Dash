import React, {Component} from 'react';
import axios from 'axios';

//This component contains the various categories a player can choose
class Scoreboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scoreList: [],
            currList: 'all'
        }

    }

    componentDidMount() {
        axios
            .get('/scores/scoreList/all')
            .then(res => {
                this.setState({scoreList: res.data});
            });
    }

    updateCat = (event) => {
        this.setState({
            currList: event.target.value
        }, () => {

            axios
                .get(`/scores/scoreList/${this.state.currList}`)
                .then(res => {
                    this.setState({scoreList: res.data});
                });
        });

    }

    getPlace = (n) => {
        var s = [
                "th", "st", "nd", "rd"
            ],
            v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    changeCat = (event) => {
        this.setState({currList: event.target.value});
    }

    render() {

        return (
            <div>
                <h1>Scoreboard</h1>
                <span style={{marginRight: '10px'}}>
                    Filter By
                </span>
                <select
                    value={this.state.currList}
                    onChange={this.updateCat}
                    className="categories">
                    <option value='all'>All</option>
                    <option value='sports'>Sports</option>
                    <option value='music'>Music</option>
                </select>

                <table>
                    <tbody>
                        <tr>
                            <th>Place</th>
                            <th>Name</th>
                            {this.state.currList === 'all' && <th>Category</th>}
                            <th>Score</th>
                        </tr>
                        {this
                            .state
                            .scoreList
                            .map((val, index) => {
                                this.getPlace(index + 1);
                                return (
                                    <tr key={val.id}>
                                        <td>
                                            {this.getPlace(index + 1)}
                                        </td>
                                        <td>
                                            {val.name}
                                        </td>
                                        {this.state.currList === 'all' && <td>
                                            {val.category}
                                        </td>
                                        }
                                        <td>
                                            {val.score}
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>

            </div>
        );

    }
}

export default Scoreboard;
