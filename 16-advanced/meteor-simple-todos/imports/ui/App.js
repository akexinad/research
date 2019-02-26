import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js'; // MONGO COLLECTION

import Task from './Task'; // COMPONENT

class App extends Component {

  constructor() {
    super();
    this.state = {
      hideCompleted: false,
    }
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  handeSubmit(event) {
    event.preventDefault();
    // Retrieve the value using the "ref" (which mught be considered bad practice because we're touching the DOM)
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Tasks.insert({
      text: text,
      createdAt: new Date()
    });

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderTasks() {
    let filteredTasks = this.props.tasks;

    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.completed);
    }

    return filteredTasks.map( task => {
      return <Task key={ task._id } task={ task } />
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List ({ this.props.incompleteCount })</h1>

          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={ this.state.hideCompleted }
              onClick={ this.toggleHideCompleted.bind(this) }
            />
            Hide Completed Tasks
          </label>

          <form
          className="new-task"
          onSubmit={ this.handeSubmit.bind(this) }
          >
            <input
              type="text"
              ref="textInput"
              placeholder="Type new tasks here"
            />
          </form>
        </header>

        <ul>
          { this.renderTasks() }
        </ul>
      </div>
    );
  }
}

// MAGIC HERE: You are not expected to understand this.
export default withTracker( () => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ completed: { $ne: true }}).count() // $ne = NOT EQUAL TO
  };
})(App);
