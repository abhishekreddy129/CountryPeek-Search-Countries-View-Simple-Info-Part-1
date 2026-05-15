import {
    createContext,
    useContext,
    useEffect,
    useReducer,
} from "react";

const FavouritesContext = createContext();

function favouritesReducer(state, action) {
    switch (action.type) {
        case "ADD_FAVOURITE": {
            const exists = state.some(
                (country) =>
                    country.cca3 === action.payload.cca3
            );

            if (exists) return state;

            return [...state, action.payload];
        }

        case "REMOVE_FAVOURITE":
            return state.filter(
                (country) =>
                    country.cca3 !== action.payload
            );

        default:
            return state;
    }
}

export function FavouritesProvider({
    children,
}) {
    const [favourites, dispatch] = useReducer(
        favouritesReducer,
        [],
        () => {
            const saved = localStorage.getItem(
                "favourites"
            );

            return saved ? JSON.parse(saved) : [];
        }
    );

    useEffect(() => {
        localStorage.setItem(
            "favourites",
            JSON.stringify(favourites)
        );
    }, [favourites]);

    function addFavourite(country) {
        dispatch({
            type: "ADD_FAVOURITE",
            payload: country,
        });
    }

    function removeFavourite(code) {
        dispatch({
            type: "REMOVE_FAVOURITE",
            payload: code,
        });
    }

    return (
        <FavouritesContext.Provider
            value={{
                favourites,
                addFavourite,
                removeFavourite,
            }}
        >
            {children}
        </FavouritesContext.Provider>
    );
}

export function useFavourites() {
    return useContext(FavouritesContext);
}