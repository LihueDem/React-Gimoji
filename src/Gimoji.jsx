import CustomSelect from "./components/ui/CustomSelect";
import Search from "./components/ui/Search";
import GifCard from "./components/ui/GifCard";
import { useState, useEffect } from "react";
import { reqAxios } from "./config/axiosGiphy";
import { useAxios } from "./hooks/useAxios";

//Variables de entorno
const apiKey = import.meta.env.VITE_APIKEY_GIPHY;

export const Gimoji = () => {
  const [dataGif, setDataGif] = useState([]);
  //const [categories, setCategories] = useState([]);
  const [textSearch, setTextSearch] = useState("animals"); //Custom Select
  const limit = 16;
  const urlSearch = `search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=0`;
  const urlCategories = `categories?api_key=${apiKey}`;
  const { dataApi: dataGifs } = useAxios(urlSearch);
  const { dataApi: dataCategories } = useAxios(urlCategories);

  //useEffect(() => {
  //  getSearch();
  //}, [textSearch]);

  // useEffect(() => {
  //   getCategories();
  // }, []);

  //getGimoji
  //Busca los Gifs en el endpoint cada vez que se actualiza el estado setTextSearch
  //const getGimoji = async ()=>{

  //Fetch
  //   const resp = await fetch(
  //     `${urlApi}/search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=0`
  //   );
  //   const { data } = await resp.json();
  //   setDataGif(data);

  //Metodo POST
  //const resp = await reqAxios.post(
  //  `search?api_key=${apiKey}`, {
  //    q:textSearch,
  //    limit: limit,
  //    offset:0
  //  }
  //);
  //}

  //const getSearch = async () => {
  //Axios
  //Metodo GET
  //const resp = await reqAxios.get(
  //  `search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=0`
  //);
  //const { data } = await resp.data;
  //setDataGif(data);
  //console.log(data); //Al estar {data} desestructurado me devuelve data.data en el console
  //};

  //Se buscan por unica vez las categorias en el endpoint
  // const getCategories = async () => {
  //   const resp = await reqAxios.get(`categories?api_key=${apiKey}`);
  //   const { data } = await resp.data;
  //   setCategories(data);
  // };

  const onChangeData = (event) => {
    setTextSearch(event.target.value);
  };

  const onClickSearch = (text) => {
    setTextSearch(text);
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row justify-content-start">
          <div className="col-sm-4">
            <CustomSelect
              dataCategories={dataCategories}
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
            {dataGifs.map((gif) => (
              <GifCard key={gif.id} itemGif={gif} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
