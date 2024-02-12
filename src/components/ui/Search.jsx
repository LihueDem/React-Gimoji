import React, { useId, useRef, useEffect } from "react";

export default function Search({ onClickSearch }) {
  // const [dataText, setDataText] = useState("");
  const id = useId();
  const refInputSearch = useRef();
  const refBtnSearch = useRef();

  useEffect(() => {
    refInputSearch.current.focus();
    refBtnSearch.current.className = "btn btn-primary disabled";
  }, []);

  const onChangeSearch = () => {
    if (refInputSearch.current.value.length > 4) {
      refBtnSearch.current.className = "btn btn-success";
    }
  };

  return (
    <div className="row">
      <div className="col-md-10">
        <input
          id={id}
          ref={refInputSearch}
          type="search"
          className=" form-control form-control-dark text-dark"
          placeholder="Search..."
          aria-label="Search"
          onChange={onChangeSearch}
        />
      </div>
      <div className="col-md-2">
        <button
          ref={refBtnSearch}
          type="button"
          className="btn btn-primary"
          onClick={() => onClickSearch(refInputSearch.current.value)}
        >
          BUSCAR
        </button>
      </div>
    </div>
  );
}
