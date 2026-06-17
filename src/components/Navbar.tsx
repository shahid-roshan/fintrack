import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function Navbar() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <nav className="bg-gray-800 p-4 flex gap-6 justify-between items-center">
      <div className="flex gap-6">
        <Link to="/" className="text-green-500 font-bold hover:text-green-300">Dashboard</Link>
        <Link to="/transactions" className="text-green-500 font-bold hover:text-green-300">Transactions</Link>
        <Link to="/budget" className="text-green-500 font-bold hover:text-green-300">Budget</Link>
        <Link to="/reports" className="text-green-500 font-bold hover:text-green-300">Reports</Link>
        <Link to="/login" className="text-green-500 font-bold hover:text-green-300">Login</Link>
      </div>
      <button
        onClick={toggleTheme}
        className="bg-gray-700 text-white px-4 py-2 rounded font-bold hover:bg-gray-600"
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </nav>
  )
}

export default Navbar