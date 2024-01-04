import React from "react";

export default function CustomSelect({ dataCategories }) {
  return (
    <div>
      <select className="form-select" aria-label="Default select example">
        <option defaultValue={true}>Selecciona una Categoria</option>
        {dataCategories.map((categ, index) => (
          <option key={index.name} value={categ.name}>
            {categ.name}
          </option>
        ))}
      </select>
    </div>
  );
}
