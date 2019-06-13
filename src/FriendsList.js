import React from "react";
import { Link } from "react-router-dom";

import FriendCard from "./FriendCard";

const FriendsList = props => {
  return (
    <div className="friends-list">
      {props.friends.map(friend => (
        <div className="friend-card">
          <Link to={`/${friend.id}`}>
            <h3>Name: {friend.name}</h3>
            <div>Age: {friend.age}</div>
            <div>Email: {friend.email}</div>
          </Link>
          <button
            onClick={event => {
              console.log("Press delete button");
              // deleteFriend(friend.id);
            }}
            className="delete-button"
          >
            Delete Friend
          </button>
          <button
            onClick={event => {
              console.log("Press delete button");
              // setUpdateFriend(event, friend)
            }}
            className="update-button"
          >
            Update Friend
          </button>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
