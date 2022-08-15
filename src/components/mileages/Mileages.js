import { useEffect, useState } from 'react';
import MileageForm from './MileageForm';
import {MileageConsumer} from '../../providers/MileageProvider';
import MileageList from './MileageList';

const Mileages = ({ mileages, miles, getAllMileages, totalMiles, addMileage }) => {
  const [adding, setAdding] = useState(false)

  // useEffect( () => {
  //   getAllMileages()
  // }, [])
 
  return (
    <>
    <h1>Miles</h1>
    { adding ?
          <>
            <MileageForm addMileage={addMileage} />
            <button variant="info" onClick={() => setAdding(false)}>Cancel</button>
          </>
        :
        <button variant="info" onClick={() => setAdding(true)}>+</button>
      }

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