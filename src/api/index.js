const URI = 'https://restcountries.eu/rest/v2/'

const fetchData = async (name, setFunc) => {
  const response = await fetch(URI + 'all')
  const data = await response.json()
  setFunc(data)
  return data
}

export default fetchData
