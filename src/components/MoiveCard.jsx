import { useEffect } from 'react'
import useMovieStore from '../store/moviestore'
const MoiveCard = () => {
    const { fetchMovies, movies, addToFavourites, } = useMovieStore();
    useEffect(() => {
        fetchMovies();
        console.log('moveisfethced');

    }, [fetchMovies])
    return (
        <div className='px-8 py-6'>
            <h2 className='text-3xl font-bold mb-6 border-b border-gray-700 pb-2'>All Movies</h2>
            <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {movies.map((m) => (
                    <div key={m.id} className='bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 text-center'>
                        <img src={m.poster} alt={m.title} className='w-full h-90 object-cover ' />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-white">{m.title}</h2>
                            <p className="text-sm text-gray-400">{m.year}</p>
                            <button onClick={() => { addToFavourites(m) }} className="mt-3 w-full bg-blue-600 202hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">Add to Favourite</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MoiveCard
