import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">
        Trading Journal
      </Link>
      <div className="space-x-4">
        {user ? (
          <>
            <span>Bonjour, {user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded"
            >
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">
              Connexion
            </Link>
            <Link to="/signup" className="hover:underline">
              Inscription
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}
