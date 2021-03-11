import axios from "axios";

export const login = async (data) => {
  const user = await axios.post(
    "https://ppagolb.herokuapp.com/api/session/login",
    data
  );
  localStorage.setItem("user", JSON.stringify(user.data));
  localStorage.setItem("token", `Bearer ${user.data.token}`);
  axios.defaults.headers.common["authorization"] = `Bearer ${user.data.token}`;
  window.location.href = "/dashboard";
  return user.data;
};

export const signup = (user) =>
  fetch("https://ppagolb.herokuapp.com/api/users/register", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const logout = () => {
  localStorage.removeItem("token");
  return { ok: true };
  // Redirect User to the Login Page
};

export const checkLoggedIn = () => {
  let preloadedState = { session: { userId: null, username: null } };

  if (localStorage.getItem("user")) {
    const user = JSON.parse(localStorage.getItem("user"));
    preloadedState["session"]["userId"] = user.token;
    preloadedState["session"]["username"] = user.username;
  }
  console.log("Checking Logged In User -> ", preloadedState);
  // const user = await axios.get('http://localhost:5000/api/session/checkSession');
  // // const response = await fetch('http://localhost:5000/api/session/checkSession');
  // // const { user } = await response.json();
  // console.log('User checkLoggedIn -> ', user.data);
  // let preloadedState = {};
  // if (user.data) {
  //   preloadedState = {
  //     session: user.data
  //   };
  // }
  return preloadedState;
};
