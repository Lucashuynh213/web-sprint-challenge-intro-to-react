import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Details(props) {
    const { characterName, close } = props
    const [details, setDetails] = useState(null)
    
useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`)
        .then(res => {
          setDetails(res.data);
        }).catch(err => console.error(err))
      }, [characterName]);

      return (
        <div className='container'>
          <h2>Details ({characterName}):</h2>
          {
            details &&
            <>
              <p>{details.name} is {details.height}</p>
              <p>Hair color: {details.hair_color}</p>
              <p>Birthdate is {details.birth_year}</p>
              {details.name} likes:
              <ul>
                {details.films.map((films) => <li key={films}>{films}</li>)}
              </ul>
            </>
          }
          <button onClick={close}>Close</button>
        </div>
      )
    }
