import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const data = [
  { month: 'Jan', income: 80000, expense: 30000 },
  { month: 'Feb', income: 75000, expense: 40000 },
  { month: 'Mar', income: 90000, expense: 35000 },
  { month: 'Apr', income: 85000, expense: 45000 },
  { month: 'May', income: 95000, expense: 38000 },
  { month: 'Jun', income: 88000, expense: 42000 },
]

function Reports() {
  const { data: apiData, isLoading, isError } = useQuery({
    queryKey: ['transactions'],
    queryFn: async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      return data
    }
  })

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-3xl text-green-500 font-bold mb-6">Reports 📊</h1>

      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h2 className="text-white font-bold mb-2">React Query Data:</h2>
        {isLoading && <p className="text-yellow-500">Loading... ⏳</p>}
        {isError && <p className="text-red-500">Error aa gaya! ❌</p>}
        {apiData && <p className="text-green-500">✅ {apiData.length} records fetched!</p>}
      </div>

      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h2 className="text-white text-xl font-bold mb-4">Monthly Income vs Expense</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip />
            <Line type="monotone" dataKey="income" stroke="#22c55e" strokeWidth={2} name="Income" />
            <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={2} name="Expense" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400">Total Income</p>
          <p className="text-2xl text-green-500 font-bold">PKR 5,13,000</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400">Total Expense</p>
          <p className="text-2xl text-red-500 font-bold">PKR 2,30,000</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400">Net Savings</p>
          <p className="text-2xl text-blue-500 font-bold">PKR 2,83,000</p>
        </div>
      </div>
    </div>
  )
}

export default Reports