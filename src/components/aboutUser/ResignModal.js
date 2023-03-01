import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { act_create_user } from '../../redux/actions'

const initUser = {
  fullname: "",
  email: "",
  password: "",
  rePassword: "",
};

export default function ResignModal() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClickClose2 = () => {
    document.getElementById('id02').style.display = 'none'
  }

  const [permission, setPermission] = useState(0)
  const [email, setEmail] = useState("")
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const handleCreate = () => {
    dispatch(act_create_user({ permission ,email, account, password, repassword }))
    navigate("/");
  }
  

  return (
    <div id="id02" className="modal">
      <form className="modal-content animate" method="post">
        <div className="imgcontainer">
          <span
            onClick={handleClickClose2}
            className="close"
            title="Close Modal"
          >
            x
          </span>
          <img
            src="img/hhinh-anh-luffy-chibi-thu-the-rat-ngau_055520104.jpg"
            alt="Avatar"
            className="avatar"
          />
        </div>
        <div className="container">
          <label>
            <b id="validate_username">Email</b>
          </label>
          <input
            type="text"
            placeholder="Nhập email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required=""
          />
          <label>
            <b id="validate_username">Tài khoản</b>
          </label>
          <input
            type="text"
            placeholder="Nhập tài khoản"
            name="account"
            id="account"
            onChange={(e) => setAccount(e.target.value)}
            required=""
          />
          <label>
            <b id="validate_password">Mật khẩu</b>
          </label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            name="account"
            id="account"
            onChange={(e) => setPassword(e.target.value)}
            required=""
          />
          <label>
            <b id="validate_re">Nhập lại mật khẩu</b>
          </label>
          <input
            type="password"
            placeholder="Nhập lại mật khẩu"
            name="repassword"
            id="repassword"
            onChange={(e) => setRepassword(e.target.value)}
            required=""
          />
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={handleCreate}
          >
            Đăng ký
          </button>
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={handleClickClose2}
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
            type="button"

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
