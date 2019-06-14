import React, { Component } from "react";
import axios from "axios";

class FriendForm extends Component {
  state = {
    newFriend: {
      name: "",
      age: "",
      email: ""
    }
  };

  handleChanges = event => {
    console.log(
      "FriendForm handleChanges event.target.name",
      event.target.name
    );
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    });
  };

  addFriend = event => {
    event.preventDefault();
    console.log("addFriend event", event);
    this.props.addFriend(this.state.newFriend);
  };

  // deleteFriend = event => {
  //   event.preventDefault();
  //   this.props.deleteFriend();
  // };

  render() {
    return (
      <div className="friend-form-div">
        <form onSubmit={this.addFriend} className="friend-form">
          <input
            className="friend-form-name-input"
            placeholder="name"
            value={this.state.name}
            name="name"
            onChange={this.handleChanges}
          />
          <input
            className="friend-form-age-input"
            placeholder="age"
            value={this.state.age}
            name="age"
            onChange={this.handleChanges}
          />
          <input
            className="friend-form-email-input"
            placeholder="email"
            value={this.state.email}
            name="email"
            onChange={this.handleChanges}
          />
          {/* <button
            onClick={event => {
              console.log("Press delete button");
              // deleteFriend(friend.id);
            }}
            className="delete-button"
          >
            Delete Friend
          </button> */}
          <button
            // onClick={event => {
            //   console.log("Press update button");
            //   props.setUpdateFriend(event, newFriend);
            // }}
            className="update-button"
          >
            Add Friend
          </button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
