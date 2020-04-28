import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addItem } from "../../actions/todo";

export class Form extends Component {
  state = {
    description: "",
  };

  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { description } = this.state;
    const todo = { description };
    this.props.addItem(todo);
    this.setState({
      description: "",
    });
  };

  render() {
    const { description } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add To Todo List</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addItem })(Form);
