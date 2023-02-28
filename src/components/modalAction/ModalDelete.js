import React from 'react'
import { act_delete_manga } from '../../redux/actions'
import { useDispatch } from 'react-redux'


export default function ModalDelete(props) {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    console.log(id);
    dispatch(act_delete_manga(id))
  }
  return (

    <div
      className="modal fade"
      id="exampleModalDelete"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabelDelete">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"

            />
          </div>
          <div className="modal-body">Chắc chắn xóa ?</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              style={{ padding: '7px' }}
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => handleDelete(props.idDelete)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}
