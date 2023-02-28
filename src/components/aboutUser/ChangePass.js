import React from 'react'

export default function ChangPass() {
  const handleClickClose3 = () => {
    document.getElementById('id03').style.display = 'none'
  }
  return (
    <div id="id03" className="modal">
      <form className="modal-content animate" method="post">
        <div className="imgcontainer">
          <span
            onClick={handleClickClose3}
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
          <label htmlFor="">
            <b id="validate_up">Nhập mật khẩu</b>
          </label>
          <input
            type="password"
            id="update_pass"
            placeholder="Nhập mật khẩu"
            name="sw"

            required=""
          />
          <label htmlFor="">
            <b id="validate_up">Nhập lại mật khẩu</b>
          </label>
          <input
            type="password"
            id="update_pass"
            placeholder="Nhập lại mật khẩu"
            name="rpsw"

            required=""
          />
          <button
            className="btn btn-outline-success"
            type="button"

          >
            Đổi mật khẩu
          </button>
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
