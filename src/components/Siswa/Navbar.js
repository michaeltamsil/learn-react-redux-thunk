import React from 'react';
import { connect } from 'react-redux';

import { tampilkanTambahSiswa } from './../../actioncreators/aplikasi';

const Navbar = (props) => {
    const tambahSiswa = () => {
        props.tampilkanTambahSiswa();
    }
    return (
        <div>
            <button onClick={tambahSiswa}>Tambah</button>
        </div>
    )
}

const mapDispatchToProps = {
    tampilkanTambahSiswa
}

export default connect(null, mapDispatchToProps)(Navbar);