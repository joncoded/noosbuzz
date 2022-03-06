import React, { useState } from "react"
import { useGlobalContext } from "../reducers/context"

const SearchForm = ({ config }) => {
  const { query, handleSearch } = useGlobalContext()
  const [newQuery, setNewQuery] = useState(query)

  const handleSearchBefore = function (e) {
    e.preventDefault()
    // prevent unnecessary API calls
    if (newQuery !== query) {
      handleSearch(newQuery)
    }
  }

  const handleNewQuery = function (e) {
    e.preventDefault()
    setNewQuery(e.target.value)
  }

  return (
    <form className="form-header" onSubmit={handleSearchBefore}>
      <div className="form-heading">
        <h1>noosbuzz</h1>
        <label className="form-label" htmlFor="search">
          {config.tagline}
        </label>
      </div>
      <div className="form-search">
        <input className="form-input" onChange={handleNewQuery} id="search" name="search" type="text" value={newQuery} />
        <input className="form-submit" type="submit" value="go" />
      </div>
    </form>
  )
}

export default SearchForm
