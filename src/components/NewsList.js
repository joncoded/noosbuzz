import React from "react"

import { useGlobalContext } from "../reducers/context"

const NewsList = () => {
  const { isLoading, hits } = useGlobalContext()
  if (isLoading) {
    return <div className="loading"></div>
  }

  return (
    <section className="news-list">
      {hits.map(item => {
        const { objectID, title, url, points, author, created_at } = item
        return (
          url && (
            <article key={objectID} className="news-item">
              <div className="main">
                <h2 className="title">
                  <a rel="noopener noreferrer" href={url} target="_blank">
                    {title.replace(".", "")}
                    <span className="sr-only"> link opens in new tab</span>
                  </a>
                </h2>
                <div className="info">
                  <span className="sr-only">posted on</span> <strong>{created_at.substring(0, 10)}</strong> via <span>{author}</span>
                </div>
              </div>
              <div className="side">
                <div className="pts">
                  {points}
                  <br />
                  pts
                </div>
              </div>
            </article>
          )
        )
      })}
    </section>
  )
}

export default NewsList
