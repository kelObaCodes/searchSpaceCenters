import {
  GET_SPECIFIC_SPACE_CENTER,
  SET_HOVERED_STATE,
  SET_SHOW_POP_UP,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from "../types/actionTypes";



export const getSpecificSpaceStation = (data) => (dispatch) => {
  try {

  dispatch({ type: GET_SPECIFIC_SPACE_CENTER, payload:data });


  } catch (error) {
  }
};
export const setHoveredState = (data) => (dispatch) => {
  try {

  dispatch({ type: SET_HOVERED_STATE, payload:data });


  } catch (error) {
  }
};
export const setPopUpState = (data) => (dispatch) => {
  try {

  dispatch({ type: SET_SHOW_POP_UP, payload:data });


  } catch (error) {
  }
};
export const showNotification = () => (dispatch) => {
  try {

  dispatch({ type: SHOW_NOTIFICATION, payload:true });


  } catch (error) {
  }
};
export const hideNotification = () => (dispatch) => {
  try {

  dispatch({ type: SHOW_NOTIFICATION, payload:false });


  } catch (error) {
  }
};

