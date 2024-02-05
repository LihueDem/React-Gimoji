import CustomSelect from "./components/ui/CustomSelect";
import Search from "./components/ui/Search";
import GifCard from "./components/ui/GifCard";
import { useState, useEffect } from "react";

// const noImage = import.meta.env.VITE_NO_IMAGE;
// const apiKey = import.meta.env.VITE_APIKEY_GIPHY;
// const urlApi = import.meta.env.VITE_URL_API;

export const Gimoji = () => {
  const [dataGif, setDataGif] = useState([]);
  const [categories, setCategories] = useState([]);
  const [textSearch, setTextSearch] = useState("animals"); //Custom Select

  const apiKey = "C2lFavIwryLJIWvxkpTXEJG2uOEFPZ0X";
  const urlApi = "https://api.giphy.com/v1/gifs";
  const limit = 16;

  useEffect(() => {
    getSearch();
  }, [textSearch]);

  useEffect(() => {
    getCategories();
  }, []);

  //Busca los Gifs en el endpoint cada vez que se actualiza el estado setTextSearch
  const getSearch = async () => {
    const resp = await fetch(
      `${urlApi}/search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=0`
    );
    const { data } = await resp.json();
    //console.log(data); //Al estar {data} desestructurado me devuelve data.data en el console
    setDataGif(data);
  };

  const getCategories = async () => {
    const resp = await fetch(`${urlApi}/categories?api_key=${apiKey}`);
    const { data } = await resp.json();
    setCategories(data);
    //console.log(data);
  };

  const onChangeData = (event) => {
    setTextSearch(event.target.value);
  };

  const onClickSearch = (text) => {
    //setDataText(text);
    setTextSearch(text);
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row justify-content-start">
          <div className="col-sm-4">
            <CustomSelect
              dataCategories={categories}
              //Los callback sirven para recibir un dato y pasarlo de parametro en la funcion
              onChangeData={(event) => onChangeData(event)}
            />
          </div>
          <div className="col-sm-6">
            <Search
              onChangeSearch={(event) => onChangeSearch(event)}
              onClickSearch={(value) => onClickSearch(value)}
            />
          </div>
        </div>
      </div>

      <div className="album py-5 ">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            {dataGif.map((gif) => (
              <GifCard key={gif.id} itemGif={gif} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
