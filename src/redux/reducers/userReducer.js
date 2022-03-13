import {
  GET_SPECIFIC_SPACE_CENTER,
SET_HOVERED_STATE,
SET_SHOW_POP_UP,
SHOW_NOTIFICATION,
HIDE_NOTIFICATION
   
  } from "../types/actionTypes";
  
  export const initialState = {
   
    spaceCenter: null,
    popUp:false,
    hoverState:false,
    notify:false,
    
  };
  
  const authReducer = function (state = initialState, action) {
    switch (action.type) {
      case GET_SPECIFIC_SPACE_CENTER:
        return { ...state, spaceCenter: action.payload };
      case SET_HOVERED_STATE:
        return { ...state, hoverState: action.payload };
      case SET_SHOW_POP_UP:
        return { ...state, popUp: action.payload };
      case SHOW_NOTIFICATION:
        return { ...state, notify: action.payload };
      case HIDE_NOTIFICATION:
        return { ...state, notify: action.payload };
     
      
      default:
        return state;
    }
  };
  
  export default authReducer;
  