import axios from "axios";

const API_URL = "https://defendovb.az/api/v1";

class AuthService {
  async login(username, password) {
    return await axios
      .post(API_URL + "/authentication/login", {
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

  async logout() {
    localStorage.removeItem("user");
    window.location = "/admin";
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
        }
      })
      .catch((err) => {
        this.logout();
      });
  }
}

export default new AuthService();
