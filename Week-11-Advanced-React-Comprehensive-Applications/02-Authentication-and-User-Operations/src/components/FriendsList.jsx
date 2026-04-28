import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const { authInfo } = useAuth();

  useEffect(() => {
    axios
      .get('https://nextgen-project.onrender.com/api/s11d2/friends', {
        headers: {
          Authorization: authInfo.token,
        },
      })
      .then((res) => setFriends(res.data))
      .catch((err) => console.log(err));
  }, [authInfo.token]);

  return (
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>
      {friends.map((friend) => (
        <div className="friendList" key={friend.id}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}
