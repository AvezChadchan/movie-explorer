import useMovieStore from '../store/moviestore'
const Favourites = () => {
  const { favourites, removeFromFavourites } = useMovieStore();
  return (
    <div className='px-8 py-6  min-h-screen'>
      <h2 className='text-3xl font-bold mb-5 border-b border-gray-700 pb-2'>Favourites</h2>
      {favourites.length === 0 && <p className='text-xl font-semibold text-gray-400 text-center py-20'>No Movies added yet...</p>}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {favourites.map((m) => (
          <div key={m.id} className='bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 flex flex-col'>
            <img src={m.poster} alt={m.title} className='w-full h-full object-cover ' />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold truncate">{m.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{m.year}</p>
              <button onClick={() => { removeFromFavourites(m) }} className="mt-auto bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favourites
