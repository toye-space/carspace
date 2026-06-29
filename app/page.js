export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to CarSpace 🚗
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Find and book your perfect car today
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((car) => (
          <div key={car} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Car #{car}</h3>
              <p className="text-gray-600">$50/day</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}