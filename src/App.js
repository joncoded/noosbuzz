import React from "react"
import config from "./config"
import Header from "./components/Header"
import NewsList from "./components/NewsList"
import Pagination from "./components/Pagination"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <header className="header">
        <Header config={config} />
        <Pagination config={config} />
      </header>
      <main>
        <NewsList />
      </main>
      <footer className="footer">
        <Footer config={config} />
      </footer>
    </>
  )
}

export default App
