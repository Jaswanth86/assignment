import {useState} from 'react'

const SearchBar = () => {
  const searchInput = useState()
  const onenter = e => {
    searchInput.setState(e.target.value)
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Enter City Name"
        onChange={onenter}
        searchInput={searchInput}
      />
    </div>
  )
}
export default SearchBar
