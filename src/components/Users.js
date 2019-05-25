import React from 'react';
import User from './User';

export default function Users() {
  return(
    <div className="right">
      <User 
          src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg" 
          alt="man"
          name="user_man"/>
      <div className="users__block">
        <User
            src = "https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
            alt = "man"
            name = "user_man" 
            min/>
        <User
            src = "https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
            alt = "man"
            name = "user_man" 
            min/>
        <User
            src = "https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
            alt = "man"
            name = "user_man" 
            min/>
        <User
            src = "https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
            alt = "man"
            name = "user_man" 
            min/>
        <User
            src = "https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
            alt = "man"
            name = "user_man" 
            min/>
      </div>
    </div>
  );
}