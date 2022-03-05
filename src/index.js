import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.css"
import App from "./App"
import { AppProvider } from "./reducers/context"
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
