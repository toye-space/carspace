export default function Navbar() {
  return (
    <nav className="bg-black border-b border-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white">
          🚗 CarSpace
        </a>
        <div className="space-x-6">
          <a href="/inventory" className="text-gray-300 hover:text-white transition">Cars</a>
          <a href="/admin" className="text-gray-300 hover:text-white transition">Admin</a>
        </div>
      </div>
    </nav>
  )
}