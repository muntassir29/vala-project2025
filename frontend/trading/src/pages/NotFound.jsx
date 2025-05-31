import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h2 className="text-4xl font-bold mb-4">404 - Page non trouvée</h2>
      <Link to="/" className="text-blue-600 hover:underline">
        Retour à l'accueil
      </Link>
    </div>
  )
}
