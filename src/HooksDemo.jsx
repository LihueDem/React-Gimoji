import React, { useMemo, useState } from "react";
import { useCallback } from "react";

export const HooksDemo = () => {
  const [cont, setCont] = useState(0);

  const onClickSumar = () => {
    setCont((prev) => prev + 1);
  };

  const dobleContador = () => {
    return cont * 2;
  };

  //memoriza la funcion
  const callback = useCallback(() => dobleContador(), []);
  //memoriza el resultado
  const memo = useMemo(() => dobleContador(), []);

  console.log(callback, "CALLBACK");
  console.log(callback());
  console.log(memo, "MEMO");

  return (
    <div className=" d-flex row justify-content-center mt-5">
      <div>NUM: {cont}</div>
      <button onClick={onClickSumar}> AGREGAR </button>
    </div>
  );
};
