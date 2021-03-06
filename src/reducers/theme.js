import { CHANGE_THEME } from '../actions/theme';

const initialState = {
  primaryColor: '#4F6D7A',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, primaryColor: action.color };
    default:
      return state;
  }
};
