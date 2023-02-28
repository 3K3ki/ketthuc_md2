import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { act_delete_user, act_get_user } from '../../redux/actions'
import Footer from '../aboutManga/Footer'
import Header from '../aboutManga/Header'
import ModalDelete from '../modalAction/ModalDelete'
import ResignModal from './ResignModal'


export default function Admin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleHome = () => {
    navigate("/")
  }
  const handleDelete = (id) => {
    dispatch(act_delete_user(id))
    navigate("/admin")
  }

  useEffect(() => {
    dispatch(act_get_user())
  }, []);
  //hiển thị ra state
  const listUser = useSelector(state => state.users)
  console.log(listUser);
  let elementListUser = listUser.map((user, index) => {
    return <tr key={user.id}>
      <td>{index + 1}</td>
      <td> {user.id} </td>
      <td>{user.email}</td>
      <td> {user.account} </td>
      <td> {user.password} </td>
      <td className="btn-change">
        <button data-bs-toggle="modal" className='btn btn-primary' data-bs-target="#exampleModalDelete" onClick={() => handleDelete(user.id)}>DELETE</button>
      </td>
    </tr>
  })
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div
            className="rounded col-12"
            style={{
              backgroundColor: "#dc4d4d",
              textAlign: "center",
              margin: "20px 20px 20px 20px"
            }}
          >

            <table className="table" style={{}}>
              <thead>
                <tr className="table-primary">
                  <th>STT</th>
                  <th>ID</th>
                  <th>EMAIL</th>
                  <th>NAME ACCOUNT</th>
                  <th>PASSWORD</th>
                  <th className="btn-change">ACTION</th>
                </tr>
              </thead>
              <tbody id="drawTable">
                {elementListUser}
              </tbody>
            </table>
          </div>
          <div />
        </div>
      </div>
      <div>
        <Footer />
      </div>
      {/*MODAL DELETE*/}
      <ModalDelete />
      {/*END MODAL DELETE*/}
      <ResignModal />


    </>
  )
}
