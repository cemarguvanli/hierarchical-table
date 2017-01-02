import React from 'react'
import { shallow } from 'enzyme'
import TreeNode from '../app/components/Users/TreeNode'

var node = {
    'ID': 1,
    'parentID': 0,
    'Phone': '(403) 125-2552',
    'City': 'Coevorden',
    'Name': 'Grady',
    'children': []
};

const enzymeWrapper = shallow(<TreeNode node={node} />)

describe('(TreeNode) TreeNode', () => {
  it('renders without exploding', () => {

  });

  it("list of user information", () => {
    expect(node.ID).toBe(1);
    expect(node.parentID).toBe(0);
    expect(node.Phone).toBe('(403) 125-2552');
    expect(node.City).toBe('Coevorden');
    expect(node.Name).toBe('Grady');
    expect(node.children.length).toBe(0);
  });
});
