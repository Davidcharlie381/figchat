const CONFIG = {
  api_url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://figchat-api.onrender.com",
};

export default CONFIG;
