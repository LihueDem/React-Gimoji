import React from "react";

export const TaskCard = ({ dataCardItem, deleteCard }) => {
  return (
    <div className="col-sm-3 gy-3 gx-3">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title ">Comentario: {dataCardItem.id}</h5>
          <p className="card-text"> {dataCardItem.taskTitle} </p>
          <button
            type="button"
            className="btn btn-sm btn-danger"
            onClick={() => deleteCard(dataCardItem.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
