import axios from "axios";

const API_URL = "http://defendo-001-site1.atempurl.com/api/v1/authentication";

class AuthService {
  async login(username, password) {
    await axios
      .post(API_URL + "/login", {
        emailOrUsername: username,
        password: password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
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
  }

  async refreshToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    return await axios
      .post(
        API_URL + "/refreshtokenlogin",
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
        if (response.data.accessToken) {
          user.accessToken = response.data.accessToken;
          user.refreshToken = response.data.refreshToken;
          localStorage.setItem("user", JSON.stringify(user));
        }
        return response.data;
      });
  }
}

export default new AuthService();
