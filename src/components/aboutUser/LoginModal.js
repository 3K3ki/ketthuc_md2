import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [userLogin, setUserLogin] = useState({ account: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleClickClose = () => {
    document.getElementById('id01').style.display = 'none'
  }
  const handleLogin = (e) => {
    e.preventDefault();
    if (userLogin.account.trim() === "" || userLogin.password.trim() === "") {
      setErrorMessage("email và mật khẩu không được để trống");
      return;
    }
    axios
      .get(
        `http://localhost:3002/users?account=${userLogin.account}&password=${userLogin.password}`
      )
      .then((res) => {
        console.log(res.data);
        //đăng nhập thành công
        if (res.data[0].permission === 1) {
          localStorage.setItem("admin", JSON.stringify(res.data[0]));
          navigate("/add");
        } else {
          localStorage.setItem("users", JSON.stringify(res.data[0]));
          navigate("/");
        }
      });
  };

  return (
    <div id="id01" className="modal">
      <form className="modal-content animate" method="post">
        <div className="imgcontainer">
          <span
            onClick={handleClickClose}
            className="close"
            title="Close Modal"

          >
            ×
          </span>
          <img
            src="img/hhinh-anh-luffy-chibi-thu-the-rat-ngau_055520104.jpg"
            alt="Avatar"
            className="avatar"
          />
        </div>
        <div className="container">
          <label
            className="alert alert-primary"
            style={{ color: "red" }}
            id="checklogin"
          />
          <label>
            <b id="validate_username1">Tài khoản</b>
          </label>
          <input
            value={userLogin.account}
            type="text"
            placeholder="Nhập tài khoản"
            name="uname"
            id="username1"

            onChange={(e) =>
              setUserLogin({ ...userLogin, account: e.target.value })
            }
          />
          <label>
            <b id="validate-password1">Mật khẩu</b>
          </label>
          <input
            value={userLogin.password}
            onChange={(e) =>
              setUserLogin({ ...userLogin, password: e.target.value })
            }
            type="password"
            placeholder="Nhập mật khẩu"
            name="psw"
            id="password1"

          />
           <p className="text-danger text-error">{errorMessage}</p>
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={handleLogin}
          >
            Đăng nhập
          </button>
          <label>
            <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
            Remember me
          </label>
        </div>
        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <button
            style={{ color: "#e2e2e2" }}
            type="button"
            onClick={handleClickClose}
            className="cancelbtn"
          >
            Hủy
          </button>
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>

    </div>
  )
}
