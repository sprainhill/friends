import React, { Component } from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import axios from "axios";

import "./App.css";

import FriendsList from "./FriendsList";
import FriendForm from "./FriendForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeFriend: null,
      error: ""
    };
  }

  componentDidMount() {
    console.log("CDM: phasers locked");
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log("App CDM response", response);
        this.setState({
          friends: response.data
        });
        console.log("App response.data", response.data);
      })
      .catch(error => {
        console.log("App error", error);
        this.setState({ error });
      });
  }

  // handleChanges = event => {
  //   console.log("handleChanges event.target.name", event.target.name);
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  addFriend = (event, newFriend) => {
    event.preventDefault();
    console.log("addFriend event", event);
    axios
      .post("http://localhost5000/friends", newFriend)
      .then(response => {
        console.log("addFriend response", response);
        this.setState({
          friends: response.data
        });
        // this.props.history.push('/');
      })
      .catch(error => {
        console.log("addFriend error", error);
      });
  };

  deleteFriend = (event, id) => {
    event.preventDefault();
    console.log("deleteFriend log");
    axios
      .delete(`http://localhost5000/friends/${id}`)
      .then(response => {
        console.log("deleteFriend response.data (data back)", response.data);
        this.setState({
          friends: response.data
        });
        // this.props.history.push('/');
      })
      .catch(error => {
        console.log("deleteFriend error", error);
      });
  };

  setUpdateFriend = (event, friend) => {
    event.preventDefault();
    console.log("setUpdateFriend log");
    this.setState({
      activeFriend: friend
    });
    // this.props.history.push('/');
  };

  updateFriend = (event, friend) => {
    event.preventDefault();
    console.log("updateFriend log");
    axios
      .put(`http://localhost5000/friends/${friend.id}`, friend)
      .then(response => {
        console.log("updateFriend response", response);
        this.setState({
          activeFriend: null,
          friends: response.data
        });
        // this.props.history.push('/');
      })
      .catch(error => {
        console.log("updateFriend error", error);
      });
  };

  render() {
    console.log("App rendering this.state.friends", this.state.friends);
    return (
      <div className="App">
        <h1>Michael Scott Best Friends Day</h1>
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
        {/* <FriendForm
          addFriend={this.addFriend}
          // handleChanges={handleChanges}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
        /> */}
      </div>
    );
  }
}

export default App;
