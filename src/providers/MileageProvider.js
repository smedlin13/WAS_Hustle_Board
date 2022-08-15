import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const MileageContext = React.createContext();
export const MileageConsumer = MileageContext.Consumer;

const MileageProvider = ({ children }) => {
  const [mileages, setMileages] = useState([])

  const navigate = useNavigate()

  const getAllMileages = () => {
    axios.get('/api/mileages')
      .then( res => setMileages(res.data))
      .catch( err => console.log(err))
  }

  const addMileage = (mileage) => {
    axios.post('/api/mileages', { mileage })
      .then( res => setMileages([...mileages, res.data]))
      .catch( err => console.log(err))
      // navigate('/mileages')
  }

  const updateMileage = (id, mileage) => {
    axios.put(`/api/mileages/${id}`, { mileage })
      .then( res => {
        const newUpdatedMileages = mileages.map( r => {
          if (r.id === id) {
            return res.data
          } 
            return r
        })
        setMileages(newUpdatedMileages)
        navigate('/mileages')
      })
      .catch( err => console.log(err))
  }

  const deleteMileage = (id) => {
    axios.delete(`/api/mileages/${id}`)
      .then( res => {
        setMileages(mileages.filter( r => r.id !== id))
        alert(res.data.message)
        navigate('/')
      })
      .catch( err => console.log(err))
  }

  return(
    <MileageContext.Provider value={{
      mileages,
      getAllMileages: getAllMileages,
      addMileage: addMileage,
      updateMileage: updateMileage,
      deleteMileage: deleteMileage,
    }}>
      { children }
    </MileageContext.Provider>
  )
}

export default MileageProvider;