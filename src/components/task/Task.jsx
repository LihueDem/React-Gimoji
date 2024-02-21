import React, { useState } from "react";
import { TaskCard } from "./TaskCard";
import { TaskAdd } from "./TaskAdd";
import { dataCard } from "../../data/Task";

export const Task = () => {
  const [addDataCard, setAddDataCard] = useState(dataCard);

  const onClickAddTask = (value) => {
    // console.log(valueTask);
    const newTaskObj = {
      id: addDataCard[addDataCard.length - 1].id + 1,
      // id: addDataCard.at(-1).id + 1, NUEVA FORMA DE CONSEGUIR EL ULTIMO INDICE
      taskTitle: value,
    };

    setAddDataCard([...addDataCard, newTaskObj]);
  };

  const onClickDelete = (id) => {
    console.log(`Eliminar el id: ${id} `);
    const newArrCards = addDataCard.filter((item) => item.id != id);
    setAddDataCard(newArrCards);
  };

  return (
    <div className="container" id="featured-3">
      <div>
        <h1>Deja tu opinion aqui</h1>
      </div>

      <div className="row py-5">
        {addDataCard.map((item) => (
          <TaskCard
            key={item.id}
            dataCardItem={item}
            deleteCard={(value) => onClickDelete(value)}
          />
        ))}
      </div>
      <TaskAdd onClickAdd={(value) => onClickAddTask(value)} />
    </div>
  );
};

//Callback
//<TaskAdd onClickPadre={(value) => onClickTaskAdd
