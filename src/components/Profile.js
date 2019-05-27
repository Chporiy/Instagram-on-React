import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
  return (
    <div className="container profile">
      <User
          src = "https://image.freepik.com/free-photo/man-smiling-with-arms-crossed_1187-2903.jpg"
          alt = "man"
          name = "some_user" />
      <Palette/>
    </div>
  );
}

export default Profile;