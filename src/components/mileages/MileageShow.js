import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { Button } from 'react-bootstrap';
import { MileageConsumer } from '../../providers/MileageProvider';
import MileageForm from './MileageForm';
import Mileages from './Mileages'

const MileageShow = ({ updateMileage, deleteMileage }) => {
  const params = useParams();
  const [mileage, setMileage] = useState({ miles: '', date: '' })
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/mileages/${params.mileageId}`)
      .then( res => setMileage(res.data))
      .catch( err => console.log(err))
  }, [])

  const { miles, date, id } = mileage
  return (
    <>
      { editing ? 
        <>
          <MileageForm 
            {...mileage}
            updateMileage={updateMileage}
          />
          <button variant="warning" onClick={() => setEdit(false)}>Cancel</button>
          <br />
        </>
        :
        <>
          <h3>Date: {date}</h3>
          <h5>Miles: {miles}
          </h5>
          <button 
            variant="warning" 
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button 
            variant="danger"
            onClick={() => deleteMileage(id)}
          >
            Delete
          </button>
        </>
      }
      {/* <Mileages mileageId={id} /> */}
    </>
  )
}

const ConnectedMileageShow = (props) => (
  <MileageConsumer>
    { value => <MileageShow {...props} {...value} /> }
  </MileageConsumer>
)

export default ConnectedMileageShow;