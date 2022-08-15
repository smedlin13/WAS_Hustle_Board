import { MileageConsumer } from '../../providers/MileageProvider';
import { AuthConsumer } from '../../providers/AuthProvider';
import { useEffect, useState } from 'react';

const TotalMiles = ({miles, mileages, user, getAllMileages}) => {
  let totalMiles = 0;  
  const array = mileages.map( (m) => (
            m.miles
          )) 
    for (let i = 0; i < array.length; i++) {
      totalMiles += array[i];
    }
    

   
    useEffect( () => {
      getAllMileages()
    }, [])

    if (user) return (
      <div>
      Miles Total: {totalMiles}
    

      </div>
    );
    
    
}

// export const totalMiles = totalMiles;

const ConnectedTotalMiles1 = (props) => (
  <AuthConsumer>
    { value=> <TotalMiles {...props} {...value} /> }
  </AuthConsumer>
)
const ConnectedTotalMiles = (props) => (
  <MileageConsumer>
    { value=> <ConnectedTotalMiles1 {...props} {...value} /> }
  </MileageConsumer>
)

export default ConnectedTotalMiles;

