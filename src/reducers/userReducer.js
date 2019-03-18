import { IS_AUTHENTICATED } from '../actions/actionTypes';

const initialState = {
  user: {},
};

export default function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}
