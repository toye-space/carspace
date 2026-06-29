export default function Inventory() {
  const cars = [
    { id: 1, name: "Tesla Model 3", price: 80, image: "🚗" },
    { id: 2, name: "BMW X5", price: 65, image: "🚙" },
    { id: 3, name: "Mercedes C-Class", price: 70, image: "🏎️" },
    { id: 4, name: "Audi A4", price: 60, image: "🚘" },
    { id: 5, name: "Porsche 911", price: 120, image: "🏁" },
    { id: 6, name: "Toyota Camry", price: 45, image: "🚗" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Available Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
            <div className="h-48 bg-gray-800 flex items-center justify-center text-6xl">
              {car.image}
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{car.name}</h2>
              <p className="text-2xl text-blue-400">${car.price}/day</p>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}