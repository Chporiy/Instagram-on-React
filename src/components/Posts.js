import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
  render() {
    return(
      <div className="left">
        < Post 
              alt = "nature"
              src = "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg" />
        < Post 
              alt = "nature"
              src = "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg" />
      </div>
    );
  }
}