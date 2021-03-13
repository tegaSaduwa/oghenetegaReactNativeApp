import {types} from '../types';
import axios from "axios";

export const actions = {
  toggleRightDrawer: () => ({
    type: types.APP_CONFIG.TOGGLE_DRAWER,
  }),
  resetRightDrawer: () => ({
    type: types.APP_CONFIG.RESET_RIGHT_DRAWER,
  }),
  openRightDrawer: () => ({
    type: types.APP_CONFIG.OPEN_RIGHT_DRAWER,
  }), 

  fetchData: () => {
    return async (dispatch) => {
     await axios('https://jsonplaceholder.typicode.com/todos/1').then((json) => {
        dispatch({         
          type: types.DATA,
          data: json,
        })
     })
    } 
  }
};

const initState = {
  rightDrawerState: '',
  data: []

};

export function reducer(state = initState, action) {
  switch (action.type) {
    case types.DATA:
      return {...state,};
    case types.APP_CONFIG.TOGGLE_DRAWER:
      return {...state, rightDrawerState: 'toggle'};
    case types.APP_CONFIG.OPEN_RIGHT_DRAWER:
      return {...state, rightDrawerState: 'open'};
    case types.APP_CONFIG.RESET_RIGHT_DRAWER:
      return {...state, rightDrawerState: ''};
    default:
      return state;
  }
}
