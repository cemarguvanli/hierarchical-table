import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions/';
import TreeNode from './TreeNode';

class Users extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="users">
                {
                  this.props.users.map((user, index) => {
                      return (
                          <TreeNode
                            key={user.ID}
                            index={index}
                            node={user}
                            removeUser={this.props.removeUser.bind(this, user.ID, index)}
                            toggle={this.props.toggle}
                            />
                      );
                  })
                }
            </div>
        );
    }
}

Users.propTypes = {
    users: PropTypes.array,
    removeUser: PropTypes.func,
    toggle: PropTypes.func
};

const mapStateToProps = function(state) {
    return {
        users: state.users
    };
};

const mapDispatchToProps = function(dispatch) {
    return bindActionCreators(userActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
