import { Component, ErrorInfo, ReactNode } from 'react'
import { RefreshCcw, Home, AlertCircle } from 'lucide-react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null })
    window.location.href = '/'
  }

  private handleReload = () => {
    window.location.reload()
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 font-sans dark:bg-black">
          <div className="w-full max-w-md animate-fadeIn rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
              <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>

            <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
              System Interrupted
            </h1>

            <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-400">
              Something went wrong. Don't worry, your data is safe. Let's get you back on track.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center gap-2 rounded-xl bg-gray-100 px-6 py-3 font-medium text-gray-700 transition-all hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700"
              >
                <RefreshCcw className="h-4 w-4" />
                Retry
              </button>

              <button
                onClick={this.handleReset}
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700"
              >
                <Home className="h-4 w-4" />
                Home
              </button>
            </div>

            {this.state.error && (
              <div className="mt-8 max-h-40 overflow-auto rounded-lg bg-gray-100 p-4 text-left dark:bg-zinc-800">
                <p className="font-mono text-xs text-red-500 dark:text-red-400">
                  {this.state.error.toString()}
                </p>
              </div>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
