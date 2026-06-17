function Budget() {
  const budgets = [
    { category: 'Food', limit: 15000, spent: 8000 },
    { category: 'Transport', limit: 10000, spent: 6000 },
    { category: 'Shopping', limit: 20000, spent: 18000 },
    { category: 'Bills', limit: 12000, spent: 12000 },
  ]

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-3xl text-green-500 font-bold mb-6">Budget Goals 🎯</h1>

      <div className="flex flex-col gap-4">
        {budgets.map((b) => (
          <div key={b.category} className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <p className="text-white font-bold">{b.category}</p>
              <p className="text-gray-400">PKR {b.spent} / {b.limit}</p>
            </div>
            <div className="bg-gray-700 rounded-full h-4">
              <div
                className="h-4 rounded-full"
                style={{
                  width: `${Math.min((b.spent / b.limit) * 100, 100)}%`,
                  backgroundColor: b.spent >= b.limit ? '#ef4444' : '#22c55e'
                }}
              />
            </div>
            <p className="text-gray-400 text-sm mt-1">{Math.round((b.spent / b.limit) * 100)}% used</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Budget