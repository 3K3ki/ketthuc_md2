import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import { act_create_manga, act_get_manga } from '../../redux/actions';
import ModalEdit from '../modalAction/ModalEdit';
import ModalDelete from '../modalAction/ModalDelete';
import Header from './Header';
import Footer from './Footer';
import LoginModal from '../aboutUser/LoginModal';
import ResignModal from '../aboutUser/ResignModal';


export default function AddChapter() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // FireBase Here
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  // Tạo storage lưu trữ từ dịch vụ của firebase
  const imagesListRef = ref(storage, "images/");
  // Viết hàm upload
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
      });
    });
  };
  // setImageUrls((prev) => [...prev, url]);
  // Lấy dữ liệu trả về từ firebase
  // useEffect(() => {
  //   listAll(imagesListRef).then((res) => {
  //     res.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);
  //End phần FireBase

  //update Manga
  const [updateManga, setUpdateManga] = useState({})

  // them moi mangaa
  const [idDelete, setIdDelete] = useState()
  const [name, setName] = useState("");
  const [chapters, setChapters] = useState("");
  const [status, setStatus] = useState("");
  const handleCreate = () => {
    dispatch(act_create_manga({ imageUrls, name, chapters, status }))
    setName('');
    setChapters('');
    setStatus('');
    setImageUrls('');
  }

  useEffect(() => {
    dispatch(act_get_manga())
  }, []);
  //lấy sate hiển thị ra
  const listManga = useSelector(state => state.mangas)
  let elementListManga = listManga.map((manga, index) => {
    return <tr key={manga.id}>
      <td>{index + 1}</td>
      <td><img src={manga.imageUrls} style={{ height: '150px' }}></img></td>
      <td>{manga.name}</td>
      <td>{manga.chapters}</td>
      <td>{manga.status}</td>
      <td className="btn-change"  ><button onClick={() => { setUpdateManga(manga) }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
        data-bs-whatever=""   ><i className="bi bi-pen-fill"></i></button></td>
      <td className="btn-change" ><button onClick={() => setIdDelete(manga.id)} data-bs-toggle="modal" className='btn btn-primary' data-bs-target="#exampleModalDelete"
        data-bs-whatever="" ><i className="bi bi-pen-fill"></i></button></td>
    </tr>
  })
  return (
    <>
      <Header />
      <div className="container" >
        <div className="row">
          <div
            className="rounded col-12"
            style={{
              backgroundColor: "#dc4d4d",
              textAlign: "center",
              margin: "20px 20px 20px 20px"
            }}
          >
            <div className="btn-change" >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <div style={{ color: "#f1f1f1" }}>Chon Anh:</div>
                <div>
                  <img style={{ width: "80px" }} src={imageUrls} />
                  <input  type="file" onChange={(e) => {
                    setImageUpload(e.target.files[0])
                  }}></input>
                  <button onClick={uploadFile}> Upload Image</button>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Nhập tên"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="input-group-mb-3" />
              </div>
              <div>
                <input
                  id="chapter"
                  type="number"
                  className="form-control"
                  placeholder="Nhập chapter"
                  value={chapters}
                  onChange={(e) => setChapters(e.target.value)}
                />
                <span className="input-group-mb-3" />
              </div>
              <div>
                <input
                  id="status"
                  type="text"
                  className="form-control"
                  placeholder="Nhập trạng thái"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />

              </div>
              <div>
                <button
                  onClick={handleCreate}
                  style={{
                    borderRadius: "25%",
                    backgroundColor: "#888888",
                    color: "#f0f0f0",
                    borderColor: "#dc4d4d"
                  }}
                >
                  Thêm
                </button>
              </div>
            </div>
            <table className="table" style={{ alignItems: 'center' }}>
              <thead>
                <tr className="table-primary">
                  <th>STT</th>
                  <th>Hình ảnh</th>
                  <th>NAME</th>
                  <th>Chapter</th>
                  <th>STATUS</th>
                  <th className="btn-change" style={{ width: '165px' }}>EDIT</th>
                  <th className="btn-change" style={{ width: '165px' }}>DELETE</th>
                </tr>
              </thead>
              <tbody id="drawTable">
                {elementListManga}
              </tbody>
            </table>
          </div>
          <div />
        </div>
      </div>
      <Footer />
      {/*MODAL EDIT*/}
      <ModalEdit updateManga={updateManga} />
      {/* end MODAL EDIT */}
      {/*MODAL DELETE*/}
      <ModalDelete idDelete={idDelete} />
      {/*END MODAL DELETE*/}

      <LoginModal />
      <ResignModal />
    </>

  )
}
