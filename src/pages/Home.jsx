import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

const Home = () => {
  // States
  const [ data, setData ] = useState([])

  // Effects
  useEffect( () => {
    getStarWarsData()
  }, [])

  // Functions
  const getStarWarsData = () => {
    axios.get('https://swapi.dev/api/people/').then( (response) => {
      setData(response.data.results)
    } ).catch( (error) => {
      console.error(error)
    } )
  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Gender</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map( (char,index) => (
              <tr key={index}>
                <td>{char.name}</td>
                <td>{char.height}</td>
                <td>{char.gender}</td>
                <td><Link to={`/detail/${index+1}`}>See here</Link></td>
              </tr>
            ) )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home