import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { useLocation } from 'react-router-dom'

export default function ReadManga() {
  let manga = useLocation().state
  console.log(manga);
  return (

    <div>
      <Header />
      <div className="content" style={{ height: "auto !important" }}>
        <div
          className="div_middle1"
          style={{ height: "auto !important", width: 1200, margin: "0 auto" }}
        >
          <div
            className="main"
            style={{ height: "auto !important", paddingBottom: 100 }}
          >
            <div style={{ display: "flex" }}>
              <h2 className="truyen_tranh">
                <a href="" style={{ color: "#3f94d5" }}>
                  Truyện tranh
                </a>
              </h2>
              <h2 className="truyen_tranh" style={{ marginLeft: 5 }}>
                {" "}
                &gt;{" "}
              </h2>
              <h2 className="truyen_tranh">
                <a href="" style={{ color: "#3f94d5" }}>
                  {manga.name} --
                </a>
              </h2>
              <h2 className="truyen_tranh">
                <a href="" style={{ color: "#3f94d5" }}>
                 Chương {manga.chapters}
                </a>
              </h2>
            </div>
            <div id="chapter_content">
              <div
                className="change_server"
                style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}
              >
                <button type="button" className="btn-primary" id="change_server">
                  Đổi server ảnh
                </button>
              </div>
              <div className="chapter_content" id="read_chapter">
                <h1 style={{ fontSize: 25, fontWeight: 600 }}>
                  Chapter {manga.chapters}
                </h1>
                <div className="chapter_pic d-flex flex-column" id="chapter_pic">
                  {
                    manga.imageChapterUrls.map((img)=> <img src={img}
                    style={{ width: "50%" }}>

                    </img>)
                  }
                 
                </div>
                <div 
                  className="chapter_control"
                  style={{ display: "block" }}
                  id="chapter_control"
                >
                  <div >
                    <a>
                      <p>Trang chủ</p>
                    </a>
                  </div>
                  <div className="change_chapter">
                    <button className="previous_chapter">
                      <i className="bi bi-chevron-left" />
                    </button>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected="">Chapter 2895</option>
                      <option value={1}> One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                    <button className="next_chapter">
                      <i className="bi bi-chevron-right" />
                    </button>
                  </div>
                </div>
                <div style={{ backgroundColor: "white", padding: 20 }}>
                  <h3 style={{ textAlign: "left" }}>
                    <i className="bi bi-chat-fill" style={{ marginRight: 5 }} />
                    <span style={{ marginRight: 5 }}>0</span>Bình luận
                  </h3>
                  <div className="book_comment" style={{ marginBottom: 40 }}>
                    <div className="comment_text" style={{ position: "relative" }}>
                      <textarea
                        className="comment_text_value"
                        id="area_text"
                        placeholder="Nội dung bình luận..."
                        defaultValue={""}
                      />
                      <i className="bi bi-send" onclick="createCommentt()" />
                    </div>
                    <div className="comment-list">
                      <p
                        id="comment_list"
                        style={{ float: "left", fontSize: "large" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
