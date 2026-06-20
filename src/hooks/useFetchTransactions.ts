import { useQuery } from '@tanstack/react-query'
import { fetchTransactions } from '../api/transactions'

export function useFetchTransactions() {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: fetchTransactions
  })
}