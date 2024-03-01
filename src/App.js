import React, { Component } from "react";
class UsersClass extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the response
        this.setState({ users: data }); // Update state with fetched users
      })
      .catch((error) => console.log("Error fetching users:", error));
  }

  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default UsersClass;
