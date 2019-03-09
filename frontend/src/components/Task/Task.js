import React, {Component} from 'react';
import './Task.css';


class Task extends Component {
  render() {
    return (
      <div className="Task" onClick={this.props.clicked}>
        <h3>{this.props.summary}</h3>
        <p>{this.props.description}</p>
        <p>{this.props.due_date}</p>
        <p>{this.props.status}</p>
        <p>{this.props.time_planned}</p>
      </div>
    );
  }
}
export default Task;