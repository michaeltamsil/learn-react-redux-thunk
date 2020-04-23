import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";

import { sembunyikanEdit, simpanEdit } from "./../../actioncreators/guru";

const Edit = (props) => {
    console.log(props.data);
  const [data, setData] = useState({
      nama: '',
      jurusan: ''
  })

  useEffect(() => {
      setData(props.data)
  },[props.data]);
  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setData({
      ...data,
      [name] : value
    })
  }
  const hide = () => {
    props.sembunyikanEdit();
  };

  const saveEdit = () => {
    props.simpanEdit(data)
  }
  return (
    <Modal show={props.show}>
      <div className="modal-content">
        <div className="modal-header bg-warning">
          <h5 className="modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={hide}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              className="form-control"
              id="nama"
              name="nama"
              onChange={handleChange}
              value={data.nama}
            />
          </div>
          <div className="form-group">
            <label htmlFor="jurusan">Jurusan</label>
            <input
              type="text"
              className="form-control"
              id="jurusan"
              name="jurusan"
              onChange={handleChange}
              value={data.jurusan}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
            onClick={hide}
          >
            Close
          </button>
          <button type="button" className="btn btn-primary" onClick={saveEdit}>
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.guru.editData,
    show: state.guru.isShowEdit
  };
};

const mapDispatchToProps = {sembunyikanEdit, simpanEdit};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
