"use client"

export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isError: false,
        isLoggedIn: true,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
        isError: false,
      };
    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case "LOG_OUT":
      localStorage.removeItem("user");
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
};
