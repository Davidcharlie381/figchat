"use client";

// import react from "react"

export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      if (typeof window !== "undefined") {
        // Access localStorage here
        localStorage.setItem("user", JSON.stringify(action.payload));
      }

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
      if (typeof window !== "undefined") {
        // Access localStorage here
        localStorage.removeItem("user");
      }

      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
};
