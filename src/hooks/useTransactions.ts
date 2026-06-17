import { useSelector, useDispatch } from 'react-redux'
import { addTransaction, deleteTransaction } from '../store/transactionSlice'
import type { RootState } from '../store'

export function useTransactions() {
  const dispatch = useDispatch()
  const transactions = useSelector((state: RootState) => state.transactions.transactions)

  const add = (transaction: {
    id: string
    title: string
    amount: number
    type: 'income' | 'expense'
    category: string
    date: string
  }) => {
    dispatch(addTransaction(transaction))
  }

  const remove = (id: string) => {
    dispatch(deleteTransaction(id))
  }

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0)

  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0)

  const balance = totalIncome - totalExpense

  return { transactions, add, remove, totalIncome, totalExpense, balance }
}