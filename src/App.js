import React from "react"
import Header from "./components/Header"
import NewsList from "./components/NewsList"
import Pagination from "./components/Pagination"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <header className="header">
        <Header />
        <Pagination />
      </header>
      <main>
        <NewsList />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default App
