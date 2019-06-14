import React from "react";
import { Link } from "react-router-dom";

import FriendCard from "./FriendCard";

const FriendsList = props => {
  return (
    <div className="friends-list">
      {props.friends.map(friend => (
        <Link to={`/${friend.id}`} key={friend.id}>
          <FriendCard friend={friend} key={friend.id} />
        </Link>
      ))}
    </div>
  );
};

export default FriendsList;
