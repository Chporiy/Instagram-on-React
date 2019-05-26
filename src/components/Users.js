import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';


export default class Users extends Component {
  InstaService = new InstaService();

  state = {
    users: [],
    error: false
  }

  componentDidMount() {
    this.updateUsers();
  }

  updateUsers() {
    this.InstaService.getAllPosts()
    .then(this.onLoadUsers)
    .catch(this.onError)
  }

  onLoadUsers = (posts) => {
    this.setState({
      users: posts,
      error: false
    });
  }

  onError = () => {
    this.setState({
      error: true
    });
  }

  renderUsers(arr) {
    return (
      <div className="users__block">
        {arr.map(item => {
          const {name, altname, photo, id} = item;
          if (id !== 1) {
            return (
              <User
                  src = {photo}
                  alt = {altname}
                  name = {name}
                  min/>
            );
          }
        })}
      </div>
    );
  }
  
  render() {
    const {error, users} = this.state;
      if (error) {
        return (<ErrorMessage/>);
      }
      const items = this.renderUsers(users);
      return(
        <div className="right">
          <User
                src = "https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg"
                alt = "Jessy"
                name = "jessy_john" />
          {items}
        </div>
    );
  } 
}