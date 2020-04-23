import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";

import { sembunyikanTambah, simpan } from "./../../actioncreators/guru";

const Add = (props) => {
  const [data,setData] = useState({
    nama: '',
    jurusan: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setData({
      ...data,
      [name] : value
    })

  }
  const hide = () => {
    props.sembunyikanTambah();
  };

  const save = () => {
    console.log(data);
    props.simpan(data)
  }
  return (
    <Modal show={props.show}>
      <div className="modal-content">
        <div className="modal-header">
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
            <label for="jurusan">Jurusan</label>
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
          <button type="button" className="btn btn-primary" onClick={save}>
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    show: state.guru.isShowAdd,
  };
};

const mapDispatchToProps = {
  sembunyikanTambah: sembunyikanTambah,
  simpan: simpan
 };

export default connect(mapStateToProps, mapDispatchToProps)(Add);
