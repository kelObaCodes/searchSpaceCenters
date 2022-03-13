import * as types from "../types/actionTypes";

import userReducer from "./userReducer";

const userobject = {
  spaceCenter: null,
  popUp: false,
  hoverState: false,
};
const spaceCenters = {
  name: "Darian Mill Space Center",
  uid: "e9d0cd67-a3af-47b0-98fa-d36f300fdc65",
};

describe("user Reducer", () => {
    
  it("should return default state", () => {
    const newState = userReducer(undefined, {});
    expect(newState).toEqual(userobject);
  });


  it("space centers object should return a value when saved", () => {
    const newState = userReducer(undefined, {
      type: types.GET_SPECIFIC_SPACE_CENTER,
      payload: spaceCenters,
    });
    expect(newState.spaceCenter).toEqual(spaceCenters);
  });


  it("popup should return true", () => {
    const newState = userReducer(undefined, {
      type: types.SET_SHOW_POP_UP,
      payload: true,
    });
    expect(newState.popUp).toEqual(true);
  });

  it("hovered state should return space object", () => {
    const newState = userReducer(undefined, {
      type: types.SET_HOVERED_STATE,
      payload: spaceCenters,
    });
    expect(newState.hoverState).toEqual(spaceCenters);
  });
});
