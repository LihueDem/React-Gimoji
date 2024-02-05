import React, { useState } from "react";

export default function Search({ onClickSearch }) {
  const [dataText, setDataText] = useState("");
  const onChangeSearch = (event) => {
    setDataText(event.target.value);
  };

  return (
    <div className="row">
      <div className="col-md-10">
        <input
          type="search"
          className=" form-control form-control-dark text-dark"
          placeholder="Search..."
          aria-label="Search"
          onChange={onChangeSearch}
        />
      </div>
      <div className="col-md-2">
        <button
          type="button"
          className="btn btn-primary "
          onClick={() => onClickSearch(dataText)}
        >
          BUSCAR
        </button>
      </div>
    </div>
  );
}
