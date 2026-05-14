import { Link } from "react-router-dom";

import {
    useFavourites,
} from "../context/FavouritesContext";

function CountryCard({
    country,
}) {
    const {
        favourites,
        dispatch,
    } = useFavourites();

    const isSaved =
        favourites.some(
            (fav) =>
                fav.cca3 ===
                country.cca3
        );

    function handleFavourite(
        e
    ) {
        e.stopPropagation();

        if (isSaved) {
            dispatch({
                type: "REMOVE_FAVOURITE",
                payload: country.cca3,
            });
        } else {
            dispatch({
                type: "ADD_FAVOURITE",
                payload: country,
            });
        }
    }

    return (
        <Link
            to={`/country/${country.cca3}`}
            className="card"
        >
            <img
                src={
                    country.flags.svg
                }
                alt={
                    country.name.common
                }
                className="card__flag"
            />

            <div className="card__body">
                <h2>
                    {
                        country.name.common
                    }
                </h2>

                <p>
                    Population:{" "}
                    {country.population.toLocaleString()}
                </p>

                <p>
                    Region:{" "}
                    {country.region}
                </p>

                <p>
                    Capital:{" "}
                    {country.capital?.[0] ||
                        "N/A"}
                </p>

                <button
                    className={`fav-btn ${isSaved
                            ? "fav-btn--saved"
                            : ""
                        }`}
                    onClick={
                        handleFavourite
                    }
                >
                    {isSaved
                        ? "♥ Saved"
                        : "♡ Save"}
                </button>
            </div>
        </Link>
    );
}

export default CountryCard;