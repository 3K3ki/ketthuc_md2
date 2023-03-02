import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { act_get_manga, act_search_manga } from '../../redux/actions';



export default function Header(props) {

  let { userLogin } = props

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("")
  const [name, setName] = useState("")
  const [isLogin, setIsLogin] = useState(false);

  const handleLoginForm = () => {
    document.getElementById('id01').style.display = 'block'
  }

  const handleResign = () => {
    document.getElementById('id02').style.display = 'block'
  }

  const handleChangePassForm = () => {
    document.getElementById('id03').style.display = 'block'
  }

  const switchLightMode = () => {
    const btn = document.querySelector('.btn-outline-danger')
    btn.addEventListener('click', () => {
      // THêm class dark cho body
      document.body.classList.toggle('dark-theme');
    });
  }



  useEffect(() => {
    let admin = JSON.parse(localStorage.getItem("admin"))
    // console.log(admin);
    if (userLogin !== "") {
      setIsLogin(true);
    }
    if (admin) {
      setIsLogin(true)
      setName(admin.email)
    }
  }, [userLogin]);

  const handleLogut = () => {
    localStorage.removeItem("users");
    localStorage.removeItem("admin");
    setIsLogin(false);
    navigate('/');

    dispatch(act_get_manga());
  }


  return (
    <div>
      <div style={{ backgroundColor: "#e2e2e2" }} className="header">
        <div className="ft_top" style={{ backgroundColor: "white" }}>
          <div className="div_top">
            <div className="left_top">
              <p className="logo" style={{ fontSize: 26, marginTop: 5 }}>
                <Link to="/">
                  <span style={{ color: "red" }}>C</span>MANGA
                </Link >
              </p>
              <div>
                <button
                  className="btn btn-outline-danger light-dark"
                  onClick={switchLightMode}
                  id="light-dark"
                  title="Chế độ sáng tối"
                >
                  <i className="bi bi-lightbulb-off-fill" />
                </button>
              </div>
              <div
                className="d-flex align-items-center"
                style={{
                  border: "1px solid #cccccc",
                  borderRadius: 50,
                  color: "#757575",
                  padding: "0 10px 0 20px",
                  height: 44,
                  marginTop: 5
                }}
              >
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  className="form-control me-2"
                  style={{ border: "none" }}
                  onKeyUp={() => dispatch(act_search_manga(search))}
                  id="search"
                  placeholder="Truyện bạn muốn tìm"
                />
                <button
                  style={{ border: "none", backgroundColor: "white" }}
                >
                  <i
                    className="bi bi-search "
                    style={{ color: "#dc4d4d", marginLeft: 30 }}
                  />
                </button>
              </div>
            </div>
            {isLogin ? (

              <div className="dropdown" id="dropdown">

              {/* Header right */}
                <button
                  style={{ width: "350px" }}
                  className="btn-info dropdown-toggle"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="img/hhinh-anh-luffy-chibi-thu-the-rat-ngau_055520104.jpg"
                    alt="Avatar"
                    className="avatar"
                  />{name !== "" ? name : userLogin}
                </button>

                {/* Dropdown lựa chọn đăng xuát */}
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" id='buttonLogin'>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleChangePassForm}
                    >
                      Đổi mật khẩu
                    </a>
                  </li>
                  {name === "" ?
                    "" : <><li>
                      <Link to="/admin" className="dropdown-item" id='quan-tri'>
                        Quản lý tài khoản
                      </Link>
                    </li>
                      <li>
                        <Link to="/add" className="dropdown-item" id='them-manga'>
                          Thêm Manga
                        </Link>
                      </li>
                    </>
                  }
                  <li>
                    <a className="dropdown-item" onClick={handleLogut}>
                      Đăng xuất
                    </a>
                  </li>
                </ul>
              </div>
            ) : (<div
              className="right-top"
              style={{ textAlign: "center", marginTop: 10 }}
            >
              <button
                className=" btn-primary"
                id="login"
                onClick={handleLoginForm}
              >

                Đăng nhập
              </button>
              <button
                className="btn-primary"
                id="register"
                onClick={handleResign}
              >

                Đăng ký
              </button>

            </div>)}
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#dc4d4d" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: 1200,
            backgroundColor: "#dc4d4d",
            marginLeft: "10%"
          }}
        >
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
              <a className="navbar-brand" style={{ color: "#e2e2e2" }} href="#">
                CGame
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link  "
                    style={{ color: "#e2e2e2" }}
                    aria-current="page"
                    href="#"
                  >
                    Raw
                  </a>
                </li>
                <li className="nav-item dropdown" style={{ marginLeft: 40 }}>
                  <a
                    className="nav-link dropdown-toggle"
                    style={{ color: "#e2e2e2" }}
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Thể loại
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </div>
  )
}
