import React, { useEffect } from 'react'
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from 'react';
import {v4} from 'uuid'
import { act_update_manga } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function ModalAddImageChapter(props) {
    // FireBase Here
   const dispatch = useDispatch()
    const [imageUpload, setImageUpload] = useState([]);
    const [imageChapterUrls, setImageChapterUrls] = useState([]);

    let{manga} =props
   
    // Viết hàm upload
    const uploadFile = (e) => {
        e.preventDefault();
   console.log({imageUpload});
       for(let i=0;i<imageUpload.length;i++){
        const imageRef = ref(storage, `imagesChapterUrls/${imageUpload[i].name}${v4()}`);
        uploadBytes(imageRef, imageUpload[i]).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageChapterUrls((prev) => [...prev, url]);
                
            });
        });
    }
    };

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
  
    const handleUpdate = () => {
        console.log(manga.id);
        dispatch(act_update_manga({...manga, imageChapterUrls }))
        setImageChapterUrls([])
      }

    return (
        <div
            className="modal fade"
            id={`modalAdd${manga.id}`}
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"

        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel" />
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"

                        />
                    </div>
                    <div className="modal-body">
                        <form>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}
                            >
                                <div style={{ color: "#f1f1f1" }}>Chon Anh:</div>
                                <div>
                                    {
                                        imageChapterUrls.map((url) => <img style={{ width: "80px" }} src={url} />)
                                    }

                                    <input multiple type="file" onChange={(e) => {
                                        setImageUpload(e.target.files)
                                    }}></input>
                                    <button onClick={uploadFile}> Upload Image</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            style={{ padding: '7px' }}
                            data-bs-dismiss="modal"
                            onClick={handleUpdate}
                        >
                            Add Image
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
