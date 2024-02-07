import CustomSelect from "./components/ui/CustomSelect";
import Search from "./components/ui/Search";
import GifCard from "./components/ui/GifCard";
import Loading from "./components/ui/Loading";
import { useState } from "react";
import { useAxios } from "./hooks/useAxios";

//Variables de entorno
const apiKey = import.meta.env.VITE_APIKEY_GIPHY;

export const Gimoji = () => {
  const [textSearch, setTextSearch] = useState("animals"); //Custom Select
  const limit = 16;
  const urlSearch = `search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=0`;
  const urlCategories = `categories?api_key=${apiKey}`;
  const { dataApi: dataGifs } = useAxios(urlSearch);
  const { dataApi: dataCategories } = useAxios(urlCategories);

  const onChangeData = (event) => {
    setTextSearch(event.target.value);
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
        </div>
      </div>
    </>
  );
};
