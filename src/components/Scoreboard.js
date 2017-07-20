import React, {Component} from 'react';
import axios from 'axios';
import SbCategory from './SbCategory';

//This component contains the various categories a player can choose
class Scoreboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scoreList: [],
            currList:'all'
        }

    }

    componentDidMount() {
        axios
            .get('/scores/scoreList')
            .then(res => {
                // console.log(res.data);
                this.setState({
                    scoreList: res.data
                }, () => {
                    // console.log(this.state.scoreList);
                });
                // console.log(JSON.stringify(res.data));
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
        this.setState({currList:event.target.value});
    }

    render() {
        
        if(this.state.currList == 'all'){

        return (
            <div>
                <h1>Scoreboard</h1>
                <span> Filter By </span>
                <select value={this.state.currList} onChange={this.changeCat}>
                    <option value='all'>All</option>
                    <option value='sports'>Sports</option>
                    <option value='music'>Music</option>
                </select>

                <table>
                    <tbody>
                        <tr>
                            <th>Place</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Score</th>
                        </tr>
                        {this
                            .state
                            .scoreList
                            .map((val, index) => {
                                console.log(val);
                                console.log(index + 1);
                                this.getPlace(index + 1);
                                return (
                                    <tr key={val.id}>
                                        <td>
                                            {this.getPlace(index + 1)}
                                        </td>
                                        <td>
                                            {val.name}
                                        </td>
                                        <td>
                                            {val.category}
                                        </td>
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
        else{
            return (
            <div>
                 <select value={this.state.currList} onChange={this.changeCat}>
                    <option value='all'>All</option>
                    <option value='sports'>Sports</option>
                    <option value='music'>Music</option>
                </select>

                <SbCategory cat={this.state.currList}></SbCategory>
                
            </div>
            );
                
        }

    }
}

export default Scoreboard;
