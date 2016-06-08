import { ADD_LINK_INFO } from '../actions/link';

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_LINK_INFO:
      return {
        ...action.payload
      }
    default:
      return state;
  }
}