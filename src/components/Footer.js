import React from "react"

const Footer = () => {
  return (
    <>
      <p>
        a{" "}
        <a href="https://www.joncoded.com" rel="noopener noreferrer" target="_blank">
          @joncoded<span className="sr-only"> link opens in new tab</span>
        </a>{" "}
        mashup{" "}
      </p>
      <p>
        stories pulled from the{" "}
        <a href="https://hn.algolia.com/api" rel="noopener noreferrer" target="_blank">
          algolia hacker news api<span className="sr-only"> link opens in new tab</span>
        </a>
      </p>
    </>
  )
}

export default Footer
