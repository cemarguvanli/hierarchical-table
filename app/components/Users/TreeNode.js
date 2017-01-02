import React, { Component, PropTypes } from 'react';

class TreeNode extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        };
    }

    toggle(id, index) {
        this.setState({ visible: !this.state.visible });
        this.props.toggle.bind(this, id, index)();
    }

    render() {
        const { node, index } = this.props;
        let childNode = node.children.map((child, i) => {
            return <TreeNode key={child.ID} index={i} node={child} toggle={this.props.toggle} />;
        });
        return (
          <div className={!node.child ? 'parent' : 'child'}>
            <div className="tree">
                <ul key={node.ID} className={this.state.visible ? 'collapse' : ''}>
                  <li><button
                        className="btn-toggle"
                        onClick={this.toggle.bind(this, node.ID, index)}
                        disabled={!node.children.length ? true : false}> </button>
                  </li>

                    <li>{node.Name}</li>
                    <li>{node.City}</li>
                    <li>{node.Phone}</li>
                    {
                      !node.child ?
                      <li><button onClick={this.props.removeUser}>X</button></li>
                      : null
                    }
                    { childNode }
                </ul>
            </div>
          </div>

        );
    }
}

TreeNode.propTypes = {
    node: PropTypes.object,
    removeUser: PropTypes.func,
    toggle: PropTypes.func,
    index: PropTypes.number,
};

export default TreeNode;
