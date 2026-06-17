import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useTransactions } from '../hooks/useTransactions'

const monthlyData = [
  { month: 'Jan', income: 80000, expense: 30000 },
  { month: 'Feb', income: 75000, expense: 40000 },
  { month: 'Mar', income: 90000, expense: 35000 },
  { month: 'Apr', income: 85000, expense: 45000 },
  { month: 'May', income: 95000, expense: 38000 },
  { month: 'Jun', income: 88000, expense: 42000 },
]

function Dashboard() {
  const { totalIncome, totalExpense, balance } = useTransactions()

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl text-green-500 font-bold mb-6"
      >
        FinTrack Dashboard 💰
      </motion.h1>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Total Balance', value: `PKR ${balance.toLocaleString()}`, color: 'text-green-500' },
          { label: 'Income', value: `PKR ${totalIncome.toLocaleString()}`, color: 'text-blue-500' },
          { label: 'Expense', value: `PKR ${totalExpense.toLocaleString()}`, color: 'text-red-500' },
        ].map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-800 p-4 rounded-lg"
          >
            <p className="text-gray-400">{card.label}</p>
            <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-gray-800 p-4 rounded-lg"
      >
        <h2 className="text-white text-xl font-bold mb-4">Monthly Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip />
            <Bar dataKey="income" fill="#22c55e" name="Income" />
            <Bar dataKey="expense" fill="#ef4444" name="Expense" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

    </div>
  )
}

export default Dashboard