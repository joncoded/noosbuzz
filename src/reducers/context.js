import React, { useContext, useEffect, useReducer } from "react"

import { SET_LOADING, SET_STORIES, HANDLE_PAGE, HANDLE_SEARCH } from "./actions"
import reducer from "./reducer"

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search_by_date?"

const initialState = {
  isLoading: true,
  hits: [],
  query: "",
  page: 0,
  nbPages: 0
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchStories = async url => {
    dispatch({ type: SET_LOADING })
    try {
      const response = await fetch(url)
      let data = await response.json()

      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages }
      })
    } catch (error) {
      console.log(error)
    }
  }
  const handleSearch = query => {
    dispatch({ type: HANDLE_SEARCH, payload: query })
  }
  const handlePage = value => {
    dispatch({ type: HANDLE_PAGE, payload: value })
  }
  useEffect(() => {
    fetchStories(`${API_ENDPOINT}tags=story&numericFilters=points>=50&query=${state.query}&page=${state.page}`)
  }, [state.query, state.page])

  return <AppContext.Provider value={{ ...state, handleSearch, handlePage }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
