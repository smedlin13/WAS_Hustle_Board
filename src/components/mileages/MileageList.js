import {MileageConsumer} from '../../providers/MileageProvider'; 
import { AuthConsumer } from '../../providers/AuthProvider';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import Mileage from './Mileage';

const MileageList = ({ mileages, updateMileage, deleteMileage}) => {
  const [user, setUser] = useState({ name: ''})

  return(
    <>
      <div>
       
        { mileages.map( (m) => (
          <>
          <Link to={`/mileages/${m.id}`}>
            <Mileage {...m} key={m.id}
          updateMileage={updateMileage}
          deleteMileage={deleteMileage}
          />
          </Link>
          <p>{m.date}</p>
          <p>{m.miles}</p>

          </>
        )) }
      </div>
    </>
  );
}

const connectedMileageList = (props) => (
  <MileageConsumer>
    { value => <MileageList {...props} {...value} />}
  </MileageConsumer>
)

export default MileageList;