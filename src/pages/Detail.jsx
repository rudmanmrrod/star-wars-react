import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import axios from 'axios'

const Detail = () => {
  // Params
  const { id } = useParams()

  // State
  const [ info, setInfo ] = useState()
  
  // Effects
  useEffect( () => {
    if(id){
      getDetail()
    }
  },[id])

  const getDetail = () => {
    axios.get(`https://swapi.dev/api/people/${id}/`).then( (response) => {
      setInfo(response.data)
    } ).catch( (error) => {
      console.error(error)
    } )
  }
  

  return (
    <div className="container">
      <Link className="btn btn-primary" style={{marginBottom:'10px'}} to="/">Back</Link>
      
      <div className="card" style={{width:'18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{info && info.name}</h5>
          <ul className="list-group">
            <li className="list-group-item"><b>Birth year:</b> {info && info.birth_year}</li>
            <li className="list-group-item"><b>Hair color:</b> {info && info.hair_color}</li>
          </ul>
        </div>
      </div>
    </div>
    
  )
}

export default Detail