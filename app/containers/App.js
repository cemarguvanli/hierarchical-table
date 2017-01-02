import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class App extends Component {
    render() {
        return (
          <div className="container">
            <header>
              <h1>Hierarchical Table</h1>
              <ul>
                <li><Link to="/">Table</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </header>
            <main>
              { this.props.children }
            </main>
            <footer>

            </footer>
          </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object
};

export default App;
