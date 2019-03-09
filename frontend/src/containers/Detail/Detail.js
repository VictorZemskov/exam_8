import React, {Component} from 'react';
import './Detail.css';
import axios from 'axios';


class Detail extends Component {
    state = {
        loadedTask: null
    }

    componentDidMount() {
                const BASE_URL = 'http://localhost:8000/api/v1/';
                axios.get(BASE_URL + 'tasks/' + this.props.match.params.id).then(response => {
                    this.setState({loadedTask: response.data});
                });
            }


    render() {

    return (
      this.state.loadedTask ? <div className="Detail">
        <h3>{this.state.loadedTask.summary}</h3>
        <p>{this.state.loadedTask.description}</p>
        <p>{this.state.loadedTask.due_date}</p>
        <p>{this.state.loadedTask.status}</p>
        <p>{this.state.loadedTask.time_planned}</p>
      </div> : null
    );
  }
}
export default Detail;
