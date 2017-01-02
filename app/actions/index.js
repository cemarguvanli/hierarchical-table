import * as types from '../constants';

export function removeUser(userId, i) {
    return {
        type: types.REMOVE_USER,
        i,
        userId
    };
}

export function toggle(userId, i) {
    return {
        type: types.TOGGLE,
        i,
        userId
    };
}
