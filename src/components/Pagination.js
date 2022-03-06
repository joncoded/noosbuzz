import React from "react"
import { useGlobalContext } from "../reducers/context"

const Pagination = ({ config }) => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext()

  return (
    <div className="pagination">
      <button disabled={isLoading} onClick={() => handlePage("dec")}>
        {config.prev}
      </button>
      <p>
        {page + 1} {config.of} {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage("inc")}>
        {config.next}
      </button>
    </div>
  )
}

export default Pagination
