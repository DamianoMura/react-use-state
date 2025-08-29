import React from 'react'
import { useState } from 'react'
const Main = (props) => {
  const languages = props.data;
  const [language, setLanguage]= useState(1);
  return (
    <main>
      <div className="container my-5">
        <div className="row">
          {languages.map(lang => {
            return (
              <div className="col-2" key={lang.id}>
                <button className="btn btn-primary me-2" onClick={()=> setLanguage(lang)}>{lang.title}</button>
              </div>

            )
          })}
          </div>
          <div className="col-12 mt-4">
            <div className="card p-3">
              <h2>{language.title}</h2>
              <p>{language.description}</p>
            </div>
          </div>
        
      </div>
    </main>
  )
}

export default Main