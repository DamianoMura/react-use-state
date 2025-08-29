import React from 'react'
import { useState } from 'react'
import Button from './Button';
const Main = (props) => {
  const languages = props.data;
  const [language, setLanguage]= useState(null);
  return (
    <main>
      <div className="container my-5">
        <div className="row">
          {languages.map(lang => {
            return (
              <div className="col-2" key={lang.id}>
                <button className={`btn me-2 ${ language != null && lang.id=== language.id ? `btn-warning`:`btn-primary`}`} onClick={()=> setLanguage(lang)}>{lang.title}</button>
              </div>
             

            )
          })}
          </div>
          <div className="col-12 mt-4">
            <div className="card p-3">
              {language===null 
              ? (<h3>nessun linguaggio selezionato</h3>)
              : (
              <>
                <h2>{language.title}</h2>
                <p>{language.description}</p>
              </>
              )}
              
            </div>
          </div>
        
      </div>
    </main>
  )
}

export default Main