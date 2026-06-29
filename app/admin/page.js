export default function Admin() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Admin Dashboard
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Manage your car listings here.</p>
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          + Add New Car
        </button>
      </div>
    </div>
  )
}