import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Button, Form, Modal} from 'react-bootstrap';

import { sembunyikanTambahSiswa } from './../../actioncreators/aplikasi'
import { tambahSiswa } from './../../actioncreators/siswa';
const Add = (props) => {
    const [data, setData ] = useState({
        nama: '',
        kelas: ''
    });

    const handleClose = () => {
        props.sembunyikanTambahSiswa()
    }

    const handleChange = (event) => {
        event.preventDefault();
        setData({
            ...data,
            [event.currentTarget.name]: event.currentTarget.value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
        props.tambahSiswa(data)
    }

    return (
        <>

            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Tambah Siswa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Nama</Form.Label>
                            <Form.Control type="text" name="nama" onChange={handleChange} value={data.nama}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Kelas</Form.Label>
                            <Form.Control type="text" name="kelas" onChange={handleChange} value={data.kelas}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        show: state.aplikasi.isShowAddSiswa
    }
}

const mapDispatchToProps = { 
    sembunyikanTambahSiswa : sembunyikanTambahSiswa,
    tambahSiswa : tambahSiswa
 }

export default connect(mapStateToProps, mapDispatchToProps )(Add);