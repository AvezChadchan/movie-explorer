import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
const movieStore = (set) => ({
    movies: [],
    favourites: [],
    fetchMovies: async () => {
        const res = await fetch('/moives.json');
        const data = await res.json()
        set({
            movies: data
        });
    },
    addToFavourites: (movie) => {
        set((state) => {
            if (state.favourites.find((m) =>  m.id === movie.id )) {
                return state;
            }
            return { favourites: [...state.favourites, movie] };
        })
    },
    removeFromFavourites: (movie) => {
        set((state) => ({
            favourites: state.favourites.filter((m) => m.id !== movie.id),
        }))
    }
})
const useMovieStore = create(devtools(persist(
    movieStore, {
    name: 'MovieData',
    storage: createJSONStorage(() => sessionStorage)
})));
export default useMovieStore