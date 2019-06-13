import React, { Component } from "react";
import axios from "axios";

import FriendCard from "./FriendCard";

export default class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({
          friends: response.data
        }));
        console.log("FriendsList response.data", response.data);
      })
      .catch(error => {
        console.log("Not Enough Michael Scott", error);
      });
  }

  render() {
    console.log("FriendsList render this.state", this.state);
    return (
      <div className="friends-list">
        {this.state.friends.map(friend => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    );
  }
}
