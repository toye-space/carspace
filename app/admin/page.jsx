export default function Admin() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      <div className="bg-gray-900 rounded-lg p-8">
        <p className="text-gray-300 mb-4">Manage your car listings here.</p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition">
          + Add New Car
        </button>
        
        <div className="mt-8 border-t border-gray-700 pt-6">
          <h2 className="text-xl font-semibold mb-4">Current Listings</h2>
          <p className="text-gray-400">No cars added yet. Click the button above to add your first car!</p>
        </div>
      </div>
    </div>
  )
}