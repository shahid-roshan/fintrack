import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch, useSelector } from 'react-redux'
import { addTransaction, deleteTransaction } from '../store/transactionSlice'
import type { RootState } from '../store'

const schema = z.object({
  title: z.string().min(1, 'Title zaroori hai'),
  amount: z.number().min(1, 'Amount 0 se zyada honi chahiye'),
  type: z.enum(['income', 'expense']),
  category: z.string().min(1, 'Category zaroori hai'),
})

type FormData = z.infer<typeof schema>

function Transactions() {
  const dispatch = useDispatch()
  const transactions = useSelector((state: RootState) => state.transactions.transactions)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    dispatch(addTransaction({
      id: Date.now().toString(),
      title: data.title,
      amount: data.amount,
      type: data.type,
      category: data.category,
      date: new Date().toLocaleDateString()
    }))
    reset()
  }

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-3xl text-green-500 font-bold mb-6">Transactions 💳</h1>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-4 rounded-lg mb-6 grid grid-cols-2 gap-4">
        <div>
          <input {...register('title')} className="bg-gray-700 text-white p-2 rounded w-full" placeholder="Title" />
          {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title.message}</p>}
        </div>
        <div>
          <input {...register('amount', { valueAsNumber: true })} className="bg-gray-700 text-white p-2 rounded w-full" placeholder="Amount (PKR)" type="number" />
          {errors.amount && <p className="text-red-400 text-sm mt-1">{errors.amount.message}</p>}
        </div>
        <div>
          <input {...register('category')} className="bg-gray-700 text-white p-2 rounded w-full" placeholder="Category" />
          {errors.category && <p className="text-red-400 text-sm mt-1">{errors.category.message}</p>}
        </div>
        <div>
          <select {...register('type')} className="bg-gray-700 text-white p-2 rounded w-full">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <button type="submit" className="col-span-2 bg-green-500 text-white p-2 rounded font-bold hover:bg-green-600">
          Add Transaction ✅
        </button>
      </form>

      {/* List */}
      <div className="flex flex-col gap-3">
        {transactions.map(t => (
          <div key={t.id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
            <div>
              <p className="text-white font-bold">{t.title}</p>
              <p className="text-gray-400 text-sm">{t.category} • {t.date}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className={t.type === 'income' ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>
                {t.type === 'income' ? '+' : '-'} PKR {t.amount}
              </p>
              <button onClick={() => dispatch(deleteTransaction(t.id))} className="text-red-400 hover:text-red-600">❌</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Transactions