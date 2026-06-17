import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (email === 'shahid@fintrack.com' && password === '123456') {
      localStorage.setItem('token', 'fake-jwt-token')
      navigate('/')
    } else {
      alert('Wrong email or password!')
    }
  }

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg w-96">
        <h1 className="text-3xl text-green-500 font-bold mb-6 text-center">FinTrack 💰</h1>

        <input
          className="bg-gray-700 text-white p-3 rounded w-full mb-4"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="bg-gray-700 text-white p-3 rounded w-full mb-4"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-green-500 text-white p-3 rounded w-full font-bold hover:bg-green-600"
        >
          Login
        </button>

        <p className="text-gray-400 text-sm text-center mt-4">
          Email: shahid@fintrack.com | Pass: 123456
        </p>
      </div>
    </div>
  )
}

export default Login