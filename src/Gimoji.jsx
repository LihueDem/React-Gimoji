import { useState } from "react";
import CustomSelect from "./components/ui/CustomSelect";
import Search from "./components/ui/Search";
import { GifCard } from "./components/ui/GifCard";
import { Loading } from "./components/ui/Loading";
import { useAxios } from "./hooks/useAxios";
import { usePaginate } from "./hooks/usePaginate";

//Variables de entorno
const apiKey = import.meta.env.VITE_APIKEY_GIPHY;

export const Gimoji = () => {
  const pageDataInitial = 1; //Paginado inicial
  const [textSearch, setTextSearch] = useState("animals"); //Custom Select
  const [pageData, setPageData] = useState(pageDataInitial);
  const limit = 16;
  const { offset, onNext, onPrev, page } = usePaginate(0, limit, pageData);
  const urlCategories = `categories?api_key=${apiKey}`;
  const urlSearch = `search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=${offset}`;

  //usamos useAxios para el envio de datos
  const { dataApi: dataGifs, isLoading } = useAxios(urlSearch);
  const { dataApi: dataCategories } = useAxios(urlCategories);

  const onChangeData = (event) => {
    setTextSearch(event.target.value);
    setPageData(pageDataInitial);
  };

  const onClickSearch = (text) => {
    setTextSearch(text);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row justify-content-start">
          <div className="col-sm-4">
            <CustomSelect
              dataCategories={dataCategories}
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

          <div className="row mt-5 row-cols-md-3 d-flex justify-content-between align-items-center">
            <button
              className="btn btn-outline-primary btn-lg "
              onClick={onPrev}
            >
              Anterior
            </button>

            <h3 className="text-center"> Page: {page} </h3>
            <button className="btn btn-outline-primary btn-lg" onClick={onNext}>
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

//Los callback sirven para recibir un dato y pasarlo de parametro en la funcion

//Limit = cantos gif trae por peticion
//Offset = indica en que pagina estas

//useEffect(() => {
//  getSearch();
//}, [textSearch]);

// useEffect(() => {
//   getCategories();
// }, []);

//getGimoji
//Busca los Gifs en el endpoint cada vez que se actualiza el estado setTextSearch
//const getGimoji = async ()=>{

//Se buscan por unica vez las categorias en el endpoint
// const getCategories = async () => {
//   const resp = await reqAxios.get(categories?api_key=${apiKey});
//   const { data } = await resp.data;
//   setCategories(data);
// };

//const getSearch = async () => {

//Fetch
//   const resp = await fetch(
//     ${urlApi}/search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=0
//   );
//   const { data } = await resp.json();
//   setDataGif(data);

//Axios y Metodo GET

//const resp = await reqAxios.get(
//  search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=0
//);
//const { data } = await resp.data;
//setDataGif(data);
//console.log(data); //Al estar {data} desestructurado me devuelve data.data en el console
//};

//Metodo POST
//const resp = await reqAxios.post(
//  search?api_key=${apiKey}, {
//    q:textSearch,
//    limit: limit,
//    offset:0
//  }
//);
//}
