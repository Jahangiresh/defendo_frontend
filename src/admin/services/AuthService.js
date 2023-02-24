import axios from "axios";

const API_URL = "https://defendovb.az/api/v1/";

class AuthService {
  async login(username, password) {
    return await axios
      .post(API_URL + "authentication/login", {
        emailOrUsername: username,
        password: password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.accessToken}`;
        }
        window.location = "/admin";
        return response.data;
      })
      .catch((err) => {
        alert(err);
      });
  }

  logout() {
    localStorage.removeItem("user");
    axios.defaults.headers.common["Authorization"] = "";
  }

  async refreshToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    await axios
      .post(
        API_URL + "/authentication/refreshtokenlogin",
        {
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
        },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((response) => {
        if (response.data) {
          user.accessToken = response.data.accessToken;
          user.refreshToken = response.data.refreshToken;
          localStorage.setItem("user", JSON.stringify(user));
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.accessToken}`;
        }
        // return response.data;
      })
      .catch((err) => {
        alert(err);
      });
  }
}

export default new AuthService();
