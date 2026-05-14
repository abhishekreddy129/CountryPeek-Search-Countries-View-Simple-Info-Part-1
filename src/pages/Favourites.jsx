import { Link } from "react-router-dom";

import {
    useFavourites,
} from "../context/FavouritesContext";

import CountryCard from "../components/CountryCard";

function Favourites() {
    const { favourites } =
        useFavourites();

    if (
        favourites.length === 0
    ) {
        return (
            <div className="home__status">
                <h2>
                    No favourite
                    countries yet.
                </h2>

                <Link to="/">
                    Explore Countries
                </Link>
            </div>
        );
    }

    return (
        <div className="cards-grid">
            {favourites.map(
                (country) => (
                    <CountryCard
                        key={
                            country.cca3
                        }
                        country={country}
                    />
                )
            )}
        </div>
    );
}

export default Favourites;