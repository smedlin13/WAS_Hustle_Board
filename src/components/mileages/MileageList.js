import {MileageConsumer} from '../../providers/MileageProvider'; 
import { AuthConsumer } from '../../providers/AuthProvider';
import {Link} from 'react-router-dom';
import MileageForm from './MileageForm';
import React from 'react';
import { useState, useEffect } from 'react'; 

const MileageList = ({ name, mileages}) => {
  const [user, setUser] = useState({ name: ''})

  return(
    <>
      <div>
      <h3>{name}</h3>
        { mileages.map( (m) => (
          <>
          <p>{m.date}</p>
          <p>{m.miles}</p>
          </>
        )) }
      </div>
    </>
  );
}

// const connectedMileageList = (props) => (
//   <MileageConsumer>
//     { value => <MileageList {...props} {...value} />}
//   </MileageConsumer>
// )

export default MileageList;