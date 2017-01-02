import React, { Component } from 'react';
import Users from '../components/Users';

class Home extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
          <div>
              <Users />
          </div>
        );
    }
}

export default Home;
