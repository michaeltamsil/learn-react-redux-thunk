import React, { useState } from "react";
import { connect } from "react-redux";
import {
  tampilkanTambahSiswa,
  filterSiswa,
} from "./../../actioncreators/siswa";

const Navbar = (props) => {
  const [searchInput, setSearchInput] = useState("");
  
  const tambahSiswa = () => {
    props.tampilkanTambahSiswa();
  };

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleKeyUp = (event) => {
      search()
  }

  const search = () => {
    props.filterSiswa(searchInput);
  };
  return (
    <div className="btn-toolbar" role="toolbar">
      <div className="btn-group mr-2" role="group" aria-label="First group">
        <button onClick={tambahSiswa}>
          <i className="fas fa-user-plus" />
        </button>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            name="search"
            onChange={handleChange}
            value={searchInput}
            onKeyUp={handleKeyUp}
          />
          <div className="input-group-append" onClick={search}>
            <span className="input-group-text" id="basic-addon2">
              <i className="fas fa-search" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  filterSiswa,
  tampilkanTambahSiswa,
};

export default connect(null, mapDispatchToProps)(Navbar);
