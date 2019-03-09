import React, {Component, Fragment} from 'react';
import './Main.css';
import Task from '../../components/Task/Task';
import Detail from "../Detail/Detail";

class Main extends Component {
  state = {
    tasks: [],
    selectedTask: null,
  };


  componentDidMount() {
    const P_URL = 'http://localhost:8000/api/v1/tasks/';
    fetch(P_URL).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong with network request');
    }).then(tasks => {
      const Tasks = tasks.map(task => {
        return {
            ...task
        }
      });
      this.setState({tasks: Tasks});
    }).catch(error => {
      console.log(error);
    })
  }

  postClicked = (idTask) => {
      this.props.history.push({
      pathname: '/detail/' + idTask
    });

      this.setState({
          ...this.state,
          selectedTask: idTask
      })
  };

  render() {

    return (
      <Fragment>
        <section className="Container">
            <section className="Turn">
                <h2>Очередь</h2>
              {this.state.tasks.map(task => (
                task.status === 'turn' ? <Task
                  key={task.id}
                  summary={task.summary}
                  description={task.description}
                  due_date={task.due_date}
                  status={task.status}
                  time_planned={task.time_planned}
                  clicked={() => this.postClicked(task.id)}
                /> : null
              ))}
            </section>
            <section className="In_work">
                <h2>В работе</h2>
              {this.state.tasks.map(task => (
                task.status === 'in_work' ? <Task
                  key={task.id}
                  summary={task.summary}
                  description={task.description}
                  due_date={task.due_date}
                  status={task.status}
                  time_planned={task.time_planned}
                  clicked={() => this.postClicked(task.id)}
                /> : null
              ))}
            </section>
            <section className="Done">
                <h2>Сделано</h2>
              {this.state.tasks.map(task => (
                task.status === 'done' ? <Task
                  key={task.id}
                  summary={task.summary}
                  description={task.description}
                  due_date={task.due_date}
                  status={task.status}
                  time_planned={task.time_planned}
                  clicked={() => this.postClicked(task.id)}
                /> : null
              ))}
            </section>

            {/*<section>*/}
              {/*<Detail selectedTask={this.state.selectedTask}*/}
                                 {/*clicked={this.postClicked}*/}
                    {/*/>*/}
            {/*</section>*/}
        </section>
       </Fragment>
    )
  }
}

export default Main;