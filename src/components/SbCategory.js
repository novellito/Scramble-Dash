import React, {Component} from 'react';
import '../component-styles/submit.css';
import axios from 'axios';

//This component allows player to sumbit their score
class SbCategory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scoreList: [],
    }
  }

   
    changeCat= ()=> {
        axios
            .get(`/scores/scoreList/${this.props.cat}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    scoreList: res.data
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

    // componentDidMount() { maybe use another lifecycle hook...
    // this.changeCat();
      

    // }



  render() {
    this.changeCat();

    return (
      <div>

        <table>
          <tbody>
            <tr>
              <th>Place</th>
              <th>Name</th>
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

export default SbCategory;
