import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { act_get_manga, } from '../../redux/actions';
import LoginModal from '../aboutUser/LoginModal';
import ResignModal from '../aboutUser/ResignModal';
import ChangePass from '../aboutUser/ChangePass';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import ReadManga from './ReadManga';


export default function Home() {
  const [userLogin, setUserLogin] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showMangaInfo, setShowMangaInfo] = useState({
  });

  console.log('showMangaInfo', showMangaInfo);

  const handleSendInfo = (manga) => {
    // setShowMangaInfo(manga)
    navigate('/mangainfo', { state: manga })
  }

  const [showImgChapter, setShowImgChapter] = useState({})

  const handleShowImgChapter = (manga) => {

    // setShowMangaInfo(manga)
    navigate('/readManga', { state: manga })
  }


  useEffect(() => {
    dispatch(act_get_manga())
  }, []);
  //lấy sate hiển thị raF
  const listManga = useSelector(state => state.mangas)
  console.log(listManga);
  let elementListManga = listManga.map((manga) =>
    <>
      <div className="grid" id="listComic" key={manga.id}>
        <div className="book-avarta">
          {/* <button onClick={() => { handleSendInfo(manga) }}>Click</button> */}
          <div onClick={() => { handleSendInfo(manga) }}>
            <img src={manga.imageUrls} className="image" />
          </div >
          <div className="book-details">
            <i className="bi bi-eye-fill"></i>
            428,1k
            <i className="bi bi-bookmark-fill"></i>
            728
          </div>

        </div>
        <div className="book-info">
          <div className="book-name" >
            <a title="manga" >{manga.name}</a>
          </div>
          <div className="last-chapter" onClick={() => { handleShowImgChapter(manga) }}>
            <a >Chapter {manga.chapters}</a>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* <div className="container"> */}
      <Header userLogin={userLogin} />

      <div className="middle">
        <div className="left-mid">
          <div style={{ marginLeft: 140 }} className="">
            <div className="chat">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: 10,
                  paddingBottom: 5
                }}
              >
                <div>
                  <button type="button" className="btn btn-outline-success">
                    Tổng
                  </button>
                  <button type="button" className="btn btn-outline-success">
                    Chợ
                  </button>
                  <button type="button" className="btn btn-outline-success">
                    Tuyển
                  </button>
                </div>
                <div style={{ display: "flex", width: "40%" }}>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    style={{ marginLeft: "60%", borderRadius: 75 }}
                  >
                    <i className="bi bi-window-stack" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    title="Mở Rộng Tiện ích"
                    style={{ borderRadius: 75 }}
                  >
                    <i className="bi bi-menu-up" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    style={{ borderRadius: 75 }}
                  >
                    <i className="bi bi-volume-up-fill" />
                  </button>
                </div>
              </div>
            </div>
            <div id="box_chat" className="box_chat_home">
              <div className="chat_div" id="">
                <h3 id="chat_div" />
              </div>
            </div>
            <div
              className="chat_add"
              style={{ position: "relative", display: "flex" }}
            >
              <input
                id="chat_text"
                type="text"
                placeholder="Bạn muốn nhắn điều gì..."
              />
              <div>
                <button id="cricle">
                  <i

                    className="bi bi-arrow-down-square-fill"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="gnc" style={{ display: "flex", alignItems: "center" }}>
            <h3 style={{ marginLeft: 140, color: "red" }}>
              <i className="bi bi-arrow-repeat" />
              Truyện mới cập nhật
            </h3>
            <button
              type="button"
              className="btn btn-outline-danger"
              style={{ marginLeft: "51%", borderRadius: 75 }}
            >
              <i className="fa fa-child" />
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              style={{ borderRadius: 75 }}
            >
              <i className="bi bi-list-task" />
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              style={{ borderRadius: 75 }}
            >
              <i className="bi bi-funnel-fill" />
            </button>
          </div>

          <div className='showListMG'>
            {elementListManga}
          </div>

          <div
            className="page-direct"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <button className="btn btn-outline-danger light-dark">1</button>
            </div>
            <div>
              <button className="btn btn-outline-danger light-dark">2</button>
            </div>
            <div>
              <button className="btn btn-outline-danger light-dark">3</button>
            </div>
            <div>
              <button className="btn btn-outline-danger light-dark">4</button>
            </div>
          </div>
        </div>
        <div className="right-mid">
          <div className="comuni">
            <h4>Tham Gia Cộng Đồng</h4>
            <hr />
            <div
              className="contract"
              style={{ display: "flex" }}
            >
              <button style={{ borderRadius: "7%", backgroundColor: "black" }}>
                <svg
                  style={{ color: "darkgray" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width={68}
                  height={68}
                  fill="currentColor"
                  className="bi bi-discord"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>
              </button>
              <button
                style={{
                  marginLeft: '10px',
                  borderRadius: "7%",
                  backgroundColor: "black"
                }}
              >
                <svg
                  style={{ color: "darkgray", }}
                  xmlns="http://www.w3.org/2000/svg"
                  width={68}
                  height={68}
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="menu-right">
            <div className="top">
              <button className="btn btn-outline-primary top-manga">
                Top Ngày
              </button>
              <button className="btn btn-outline-primary top-manga">
                Top Tuần
              </button>
              <button className="btn btn-outline-primary top-manga">
                Top Tổng
              </button>
            </div>
            <div className="manga_top">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid black"
                }}
              >
                <div className="stt" style={{ width: 30, fontSize: 30 }}>
                  1
                </div>
                <div className="book-avarta1">
                  <img
                    style={{ width: 60, height: 75 }}
                    src="img/voluyendinhphng.jpg"
                    height={342}
                    width={250}
                  />
                </div>
                <div className="detail">
                  <div className="name">
                    <a href="manga/mangainfo.html">Võ Luyện Đỉnh Phong</a>
                  </div>
                  <div className="chapter">Chapter 2889</div>
                  <div className="total-view" style={{ marginLeft: 100 }}>
                    <i className="bi bi-eye-fill" />
                    17,904
                  </div>
                </div>
              </div>
              {/*                <hr style="margin-top: 10px">*/}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid black"
                }}
              >
                <div className="stt" style={{ width: 30, fontSize: 30 }}>
                  2
                </div>
                <div className="book-avarta1">
                  <img
                    style={{ width: 60, height: 75 }}
                    src="img/nhanvatphandien.jpg"
                    height={342}
                    width={250}
                  />
                </div>
                <div className="detail">
                  <div className="name">
                    <a href="">Nhân Vật Phản Diện</a>
                  </div>
                  <div className="chapter">Chapter 289</div>
                  <div className="total-view" style={{ marginLeft: 100 }}>
                    <i className="bi bi-eye-fill" />
                    8,904
                  </div>
                </div>
              </div>
              {/*                <hr style="margin-top: 10px">*/}
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="stt" style={{ width: 30, fontSize: 30 }}>
                  3
                </div>
                <div className="book-avarta1">
                  <img
                    style={{ width: 60, height: 75 }}
                    src="img/choido.jpg"
                    height={342}
                    width={250}
                  />
                </div>
                <div className="detail">
                  <div className="name">
                    <a href="">Vừa Chơi Đã Có Tài</a>
                  </div>
                  <div style={{ color: "#cccccc" }}>Chapter 28</div>
                  <div
                    className="total-view"
                    style={{ marginLeft: 100, color: "#cccccc" }}
                  >
                    <i className="bi bi-eye-fill" />
                    7,904
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>
                <a id="xem_them" href="">
                  Xem thêm...
                </a>
              </p>
            </div>
            {/*            //toptrans*/}
            <div className="top-trans">
              <button className="btn btn-outline-primary top-manga">
                Top nhóm dịch
              </button>
              <button className="btn btn-outline-primary top-manga">
                Top phiếu tháng
              </button>
            </div>
            <div className="trans_top">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid black"
                }}
              >
                <div className="stt" style={{ width: 30, fontSize: 30 }}>
                  1
                </div>
                <div className="book-avarta1">
                  <img
                    style={{ width: 60, height: 75 }}
                    src="img/Đầutroc.jpg"
                    height={342}
                    width={250}
                  />
                </div>
                <div className="detail">
                  <div className="name">
                    <a href="">Quần què CMANGA</a>
                  </div>
                  <div className="chapter">Đã dịch 148 truyện</div>
                  <div className="total-view" style={{ marginLeft: 100 }}>
                    <i className="bi bi-eye-fill" />
                    170,441
                  </div>
                </div>
              </div>
              {/*            <hr style="margin-top: 10px">*/}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid black"
                }}
              >
                <div className="stt" style={{ width: 30, fontSize: 30 }}>
                  2
                </div>
                <div className="book-avarta1">
                  <img
                    style={{ width: 60, height: 75 }}
                    src="img/manhwahoi.jpg"
                    height={342}
                    width={250}
                  />
                </div>
                <div className="detail">
                  <div className="name">
                    <a href="https://cmangaac.com/vo-luyen-dinh-phong-189">
                      Manhwa Hội
                    </a>
                  </div>
                  <div className="chapter">28 truyện</div>
                  <div className="total-view" style={{ marginLeft: 100 }}>
                    <i className="bi bi-eye-fill" />
                    17,904
                  </div>
                </div>
              </div>
              {/*            <hr style="margin-top: 10px">*/}
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="stt" style={{ width: 30, fontSize: 30 }}>
                  3
                </div>
                <div className="book-avarta1">
                  <img
                    style={{ width: 60, height: 75 }}
                    src="img/ocgiakim.jpg"
                    height={342}
                    width={250}
                  />
                </div>
                <div className="detail">
                  <div className="name">
                    <a href="https://cmangaac.com/vo-luyen-dinh-phong-189">
                      Ốc giả kim
                    </a>
                  </div>
                  <div style={{ color: "#cccccc" }} className="chapter">
                    27 truyện
                  </div>
                  <div
                    className="total-view"
                    style={{ marginLeft: 100, color: "#cccccc" }}
                  >
                    <i className="bi bi-eye-fill" />
                    17,904
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>
                <a id="xem_them1" href="">
                  Xem thêm...
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*//bottom*/}
      <Footer />
      {/*//loginform*/}
      <LoginModal setUserLogin={setUserLogin} />
      {/* {closeLoginform} */}

      {/*//Singupform*/}
      {/* <div id="id02" className="modal">
        <form className="modal-content animate" method="post">
          <div className="imgcontainer">
            <span
              onClick={handleClickClose2}
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
            <label>
              <b id="validate_username">Tài khoản</b>
            </label>
            <input
              type="text"
              placeholder="Nhập tài khoản"
              name="uname"
              id="username"
            
              required=""
            />
            <label>
              <b id="validate_password">Mật khẩu</b>
            </label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              name="psw"
              id="password"
              
              required=""
            />
            <label>
              <b id="validate_re">Nhập lại mật khẩu</b>
            </label>
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              name="rpsw"
              id="re-password"
           
              required=""
            />
            <button
              className="btn btn-outline-success"
              type="button"
              
            >
              Đăng ký
            </button>
            <button
              className="btn btn-outline-success"
              type="button"
             
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
      </div> */}
      <ResignModal />
      {/* End SIgnup form */}
      {/*//ChangePasswordform*/}
      <ChangePass />
      {/* end changePass form */}

    </>

  )
}
