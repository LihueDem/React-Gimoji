import { useFavorite } from "../../hooks/useFavorite";
import { Like } from "./Like";

const noImage = import.meta.env.VITE_NO_IMAGE;

export const GifCard = ({ itemGif }) => {
  const { favorite, onClickFavorite } = useFavorite();

  return (
    <>
      <div className="col">
        <div className="card shadow-sm">
          {/* <Link className="btn btn-outline" to={`/gimoji/${dataItem.id}`}> */}
          <img
            src={itemGif.images.fixed_width.url}
            alt="Girl in a jacket"
            width={"100%"}
            height={300}
            style={{ display: "block" }}
          />
          {/* </Link> */}
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <div>
                  <Like />
                </div>
                {/* Favoritos */}
                <button
                  onClick={onClickFavorite}
                  type="button"
                  className="btn btn-sm btn-secondary"
                >
                  {favorite && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                  )}
                  {!favorite && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                  )}
                </button>
              </div>
              <small className="text-body-secondary">
                cod: {itemGif.id.substr(0, 5)}
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
