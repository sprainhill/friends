import React, { Component } from "react";
import axios from "axios";

class FriendForm extends Component {
    this.state = {
      newFriend: {
        name: '',
        age: '',
        email: ''

      }
    };
  }

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:5000/friends")
  //     .then(response => {
  //       this.setState(() => ({
  //         friends: response.data
  //       }));
  //       console.log("FriendsForm response.data", response.data);
  //     })
  //     .catch(error => {
  //       console.log("Not Enough Michael Scott", error);
  //     });
  // }

  handleChanges = event => {
    console.log(
      "FriendForm handleChanges event.target.name",
      event.target.name
    );
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // addFriend = event => {
  //   event.preventDefault();
  //   console.log("addFriend event", event);

  //   const newFriend = {
  //     name: this.state.name,
  //     age: this.state.age,
  //     email: this.state.email
  //   };

  //   axios
  //     .post("http://localhost5000/friends", newFriend)
  //     .then(response => {
  //       console.log("FriendForm addFriend response", response);
  //       // this.setState({
  //       //   friends: response.data
  //       // });
  //     })
  //     .catch(error => {
  //       console.log("Moar Power");
  //     });
  // };

  render() {
    return (
      <div className="friend-form-div">
        <form onSubmit={this.addComment} className="friend-form">
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
          <button className="btn">Add Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
