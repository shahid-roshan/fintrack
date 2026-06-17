import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Transaction {
  id: string
  title: string
  amount: number
  type: 'income' | 'expense'
  category: string
  date: string
}

interface TransactionState {
  transactions: Transaction[]
}

const saved = localStorage.getItem('transactions')

const initialState: TransactionState = {
  transactions: saved ? JSON.parse(saved) : []
}

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload)
      localStorage.setItem('transactions', JSON.stringify(state.transactions))
    },
    deleteTransaction: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(t => t.id !== action.payload)
      localStorage.setItem('transactions', JSON.stringify(state.transactions))
    },
  },
})

export const { addTransaction, deleteTransaction } = transactionSlice.actions
export default transactionSlice.reducer