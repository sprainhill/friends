import React from "react";

const FriendCard = props => {
  return (
    <div className="friend-card">
      <h3>Name: {props.friend.name}</h3>
      <div>Age: {props.friend.age}</div>
      <div>Email: {props.friend.email}</div>
    </div>
  );
};

export default FriendCard;
