import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { act_update_manga } from '../../redux/actions'
import { useState, useEffect } from 'react'

export default function ModalEdit(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [chapters, setChapters] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrls, setImageUrls] = useState("");

  useEffect(() => {
    console.log("vào đây");

    if (props.updateManga.id) {
      setImageUrls(props.updateManga.imageUrls)
      setName(props.updateManga.name)
      setId(props.updateManga.id)
      setChapters(props.updateManga.chapters)
      setStatus(props.updateManga.status)
    }

  }, [props.updateManga]);

  const handleUpdate = () => {
    dispatch(act_update_manga({ imageUrls, id, name, chapters, status }))
    navigate("/")
  }
  return (
    <div
      className="modal fade"
      id="exampleModal"
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
              <div className="mb-3">
                <label className="col-form-label">ID:</label>
                <input
                  readOnly
                  value={id}
                  type="text"
                  className="form-control"
                  id="update_manga_name"
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Name:</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  className="form-control"
                  id="update_manga_name"
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">chapter:</label>
                <input
                  onChange={(e) => setChapters(e.target.value)}
                  value={chapters}
                  type="number"
                  className="form-control"
                  id="update_chapter_number"
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Status:</label>
                <input
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                  type="text"
                  className="form-control"
                  id="update_status_manga"
                />
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
              Update Manga
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
