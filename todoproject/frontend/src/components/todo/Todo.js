import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItems, deleteItem } from "../../actions/todo";

export class Todo extends Component {
  static propTypes = {
    todo: PropTypes.array.isRequired,
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return (
      <Fragment>
        <h2>Todo List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Description</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.todo.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>
                  <button
                    onClick={this.props.deleteItem.bind(this, todo.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  todo: state.todo.todo,
});

export default connect(mapStateToProps, { getItems, deleteItem })(Todo);
