import React from 'react'
import { useDispatch } from 'react-redux'
import Login from '../aboutUser/LoginModal'
import ResignModal from '../aboutUser/ResignModal'
import Footer from './Footer'
import Header from './Header'
import { useEffect } from 'react'
import { act_get_manga } from '../../redux/actions'

export default function MangaInfo() {
    const dispatch= useDispatch()

    useEffect(() => {
        dispatch(act_get_manga())
      }, []);
    return (
        <div>
            <>
                <Header />
                
                {/*    //Show manga information*/}
                <div className="content" style={{ height: "auto !important" }} id="mangaInfo">
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
                                        ${"{"}manga.mangaName{"}"}
                                    </a>
                                </h2>
                            </div>
                            <div className="book-detail">
                                <div
                                    className="book_info"
                                    style={{ padding: 15, position: "relative" }}
                                >
                                    <div className="book_avarta">
                                        <img
                                            src="${manga.image}"
                                            style={{ height: "100%", width: "auto" }}
                                        />
                                    </div>
                                    <div className="book_other">
                                        <p className="name">
                                            ${"{"}manga.mangaName{"}"}
                                        </p>
                                        <div className="kind">
                                            <p className="p">
                                                <a className="a-kind" href="">
                                                    Action
                                                </a>
                                            </p>
                                            <p className="p">
                                                <a className="a-kind" href="">
                                                    Fantasy
                                                </a>
                                            </p>
                                            <p className="p">
                                                <a className="a-kind" href="">
                                                    Manhua
                                                </a>
                                            </p>
                                            <p className="p">
                                                <a className="a-kind" href="">
                                                    Shounen
                                                </a>
                                            </p>
                                            <p className="p">
                                                <a className="a-kind" href="">
                                                    Supernatural
                                                </a>
                                            </p>
                                        </div>
                                        <div className="book_info_detail">
                                            <table
                                                style={{
                                                    width: 280,
                                                    textAlign: "left",
                                                    borderCollapse: "collapse",
                                                    borderSpacing: 0
                                                }}
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <i className="bi bi-rss">Tình trạng</i>
                                                        </td>
                                                        <td>Đang tiến hành</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <i className="bi bi-arrow-repeat">Cập nhật</i>
                                                        </td>
                                                        <td>10h trước</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <i className="bi bi-eye-fill">Lượt xem</i>
                                                        </td>
                                                        <td>27,806,485</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <i className="bi bi-bookmark-fill">Lượt theo dõi</i>
                                                        </td>
                                                        <td>13,744</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="book_button" style={{ marginTop: 10 }}>
                                            <button className="btn btn-success">
                                                <i className="bi bi-book" />
                                                Đọc từ đầu
                                            </button>
                                            <button className="btn btn-warning">
                                                <a href="readManga.html" style={{ color: "#f0f0f0" }}>
                                                    <i className="bi bi-book" />
                                                    Đọc tiếp
                                                </a>
                                            </button>
                                            <button className="btn btn-danger">
                                                <i className="bi bi-bookmark-fill" />
                                                Theo dõi
                                            </button>
                                            <button className="btn btn-secondary" onclick="baoLoi()">
                                                <i className="bi bi-exclamation-triangle" />
                                                Báo lỗi
                                            </button>
                                            <button className="btn btn-primary" style={{height: "38px"}}>
                                                <a
                                                    className="bi bi-facebook"
                                                    style={{ color: "#f0f0f0" }}
                                                    href="https://www.facebook.com/"
                                                />
                                                Share
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <h3>
                                    <i className="bi bi-info-circle-fill" style={{ marginRight: 5 }} />
                                    Giới thiệu
                                </h3>
                                <p>
                                    <a href="" style={{ color: "#3f94d5" }}>
                                        Võ Luyện Đỉnh Phong
                                    </a>{" "}
                                    được cập nhật nhanh nhất và đầy đủ nhất tại Cmangavip.com . Bạn đọc
                                    đừng quên để lại bình luận và chia sẻ, ủng hộ Cmanga ra các chương
                                    mới nhất của truyện Võ Luyện Đỉnh Phong nhé.
                                </p>
                                <h3>
                                    <i className="bi bi-list-ul" style={{ marginRight: 5 }} />
                                    Danh sách chương
                                </h3>
                                <div className="list_chapter">
                                    <table id="table_list">
                                        <thead>
                                            <tr style={{ borderBottom: "1px solid #eaeaea" }}>
                                                <td style={{ width: "35%" }}>Chapter</td>
                                                <td style={{ width: "33%", textAlign: "center" }}>
                                                    Cập nhật
                                                </td>
                                                <td style={{ width: "22%", textAlign: "center" }}>
                                                    Lượt xem
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ width: "35%" }}>
                                                    <a href="readManga.html">
                                                        Chapter ${"{"}manga.chapter_number{"}"}
                                                    </a>
                                                </td>
                                                <td
                                                    style={{
                                                        width: "33%",
                                                        textAlign: "center",
                                                        color: "#888888"
                                                    }}
                                                >
                                                    29 phút trước
                                                </td>
                                                <td
                                                    style={{
                                                        width: "22%",
                                                        textAlign: "center",
                                                        color: "#888888"
                                                    }}
                                                >
                                                    172
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h3>
                                    <i className="bi bi-chat-fill" style={{ marginRight: 5 }} />
                                    <span style={{ marginRight: 5 }}>0</span>Bình luận
                                </h3>
                                <div className="book_comment" style={{ marginBottom: 40 }}>
                                    <div
                                        className="comment_text"
                                        style={{ position: "relative", display: "flex" }}
                                    >
                                        <textarea
                                            className="comment_text_value"
                                            placeholder="Nội dung bình luận..."
                                            defaultValue={""}
                                        />
                                        <i className="bi bi-send" onclick="" />
                                    </div>
                                    <div className="comment-list"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <Login />
                <ResignModal />
            </>

        </div>
    )
}
