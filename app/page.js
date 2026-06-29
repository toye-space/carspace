export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-center mb-6">
        Welcome to CarSpace 🚗
      </h1>
      <p className="text-xl text-center text-gray-300 mb-12">
        Find and book your dream car today
      </p>
      <div className="text-center">
        <a href="/inventory" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
          Browse Cars →
        </a>
      </div>
    </div>
  )
}