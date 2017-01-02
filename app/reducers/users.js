import * as types from '../constants';

function toggle(state, action) {
    const stack = [].concat(state);

    let node;

    while (stack.length > 0) {
        node = stack.pop();
        if (node.ID === action.userId) {
            node.collapse = !node.collapse;
            break;
        } else if (node.children && node.children.length) {
            for (let j = 0; j < node.children.length; j += 1) {
                stack.push(node.children[j]);
            }
        }
    }
    return [...state];
}

function users(state = [], action) {
    switch (action.type) {
        case types.REMOVE_USER:
            return [
                ...state.filter((user) => user.ID !== action.userId)
            ];
        case types.TOGGLE:
            return toggle(state, action);
        default:
            return state;
    }
}

export default users;
