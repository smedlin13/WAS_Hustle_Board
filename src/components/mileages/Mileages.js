import { useEffect, useState } from 'react';
import MileageForm from './MileageForm';
import {MileageConsumer} from '../../providers/MileageProvider';
import MileageList from './MileageList';

const Mileages = ({ mileages, getAllMileages, addMileage }) => {
  const [adding, setAdding] = useState(false)

  // useEffect( () => {
  //   getAllMileages()
  // }, [])
 
  return (
    <>
    <h1>Miles</h1>
          <MileageForm addMileage={addMileage} onClick={() => setAdding(true)} />
          <MileageList mileages={mileages}/>
    </>
    )
  }

  const connectedMileage = (props) => (
    <MileageConsumer>
      { value => <Mileages {...props} {...value} /> }
    </MileageConsumer>
  )

export default connectedMileage;