import axios from 'axios'

const API = axios.create({
  baseURL: 'https://fintrack-backend-production-9a96.up.railway.app/api'
})

export const fetchTransactions = async () => {
  const { data } = await API.get('/todos?_limit=10')
  return data
}
