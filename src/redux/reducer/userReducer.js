import * as types from '../actions/actionTypes';

export const initialMMState = {
  edit: false,
  user: {
    name: 'Saqib',
    email: 'saqib@gmail.com',
  }
};

export const userReducer = (state = initialMMState, action) => {
  switch (action.type) {
    // case types.ALL_RECORDS:
    //   return { ...state, [action.dataKey]: action.response.data.data };
    default:
      return state;
  }
};
