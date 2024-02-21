import React from "react";

export const CustomBanner = () => {
  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="col-12 p-3">
          <div style={{ fontSize: "40px" }}>
            Trabajo Final de Programacion 3{" "}
          </div>
          <div style={{ fontSize: "13px" }}>
            Ejercicio GiMoji! - Alumno: Demelchiorre Lihue
          </div>
        </div>
      </div>
    </div>
  );
};
