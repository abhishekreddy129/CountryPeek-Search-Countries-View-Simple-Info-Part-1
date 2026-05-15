import CountryCard from "../components/CountryCard";

import { useFavourites } from "../context/FavouritesContext";

function Favourites() {
    const { favourites } =
        useFavourites();

    if (favourites.length === 0) {
        return (
            <p>
                No favourite countries yet.
            </p>
        );
    }

    return (
        <section className="cards-grid">
            {favourites.map((country) => (
                <CountryCard
                    key={country.cca3}
                    country={country}
                />
            ))}
        </section>
    );
}

export default Favourites;