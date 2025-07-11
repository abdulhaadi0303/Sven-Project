import './App.css'

function App() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          🚀 Tailwind is Working!
        </h1>
        <p className="text-gray-700 text-lg">
          You can now build your UI with Tailwind CSS.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow">
          Click Me
        </button>
      </div>
    </>
  )
}

export default App
