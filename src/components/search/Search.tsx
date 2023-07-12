import './search.css'
import {customerType} from "../../models/customerType"

interface searchResults {
  searchResults: (data: customerType) => void
}


const Search = ({searchResults}:searchResults) => {
  
  const apiSearch = (value:string) => {
    fetch(`https://startdeliver-mock-api.glitch.me/customer?name=${value}`)
    .then((response) => response.json())
    .then((data) => {
      searchResults(data)
    })
    .catch((error) => {
        console.error("Error fetching report data:", error)
    })
  }
  
  return(
    <div className='input-box'>
      <input
        type="text"
        required
        onChange={(e) => {
          apiSearch(e.target.value)
        }}
      />
      <span>Search here</span>
    </div>
  )
}
export default Search