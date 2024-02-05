"use client"

export const alertReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALERT":
      return {
        ...state,
        alert: action.payload,
      };
    case "HIDE_ALERT":
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
};
