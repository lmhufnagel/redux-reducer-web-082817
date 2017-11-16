export function manageFriends(state = {friends: []}, action){
  switch(action.type){
    case 'ADD_FRIEND':
    return Object.assign({}, state, {friends: [...state.friends, action.friend]})
    case 'REMOVE_FRIEND':
    const remove = state.friends.findIndex(friend => friend.id === action.id);
    return Object.assign({}, state, {
      friends: [
        ...state.friends.slice(0, remove),
        ...state.friends.slice(remove + 1)
      ]
    })
    default:
     return state;
  }
}
