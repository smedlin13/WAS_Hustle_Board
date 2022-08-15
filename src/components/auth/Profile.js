import { MileageConsumer } from '../../providers/MileageProvider';
import { AuthConsumer } from '../../providers/AuthProvider';
import { useEffect, useState } from 'react';
import MileageList from '../mileages/MileageList';
import TotalMiles from '../mileages/TotalMiles';

const Profile = ({ miles, mileages, user, getAllMileages }) => {
    // const [mileage, setMileage] = useState({date: '', miles: 0});
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
      Name: {user.name} 
      <br />
      Email: {user.email}
      <TotalMiles />
    

      </div>
    );
    
    
}

export const totalMiles = () => {}


const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value=> <Profile {...props} {...value} /> }
  </AuthConsumer>
)
const ConnectedMileageProfile = (props) => (
  <MileageConsumer>
    { value=> <ConnectedProfile {...props} {...value} /> }
  </MileageConsumer>
)

export default ConnectedMileageProfile;