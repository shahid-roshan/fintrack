import axios from 'axios'

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const fetchTransactions = async () => {
  const { data } = await API.get('/todos?_limit=10')
  return data
}