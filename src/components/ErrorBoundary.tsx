import { Component } from 'react'
import type { ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { hasError: boolean }

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center">
          <h1 className="text-red-500 text-2xl font-bold">Kuch Gadbad Ho Gai! 😢 Refresh Karo!</h1>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary