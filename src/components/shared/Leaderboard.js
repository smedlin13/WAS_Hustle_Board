import MileageList from '../mileages/MileageList';
import {AuthConsumer} from '../../providers/AuthProvider';
import { MileageConsumer } from '../../providers/MileageProvider';
import { useEffect } from 'react';
import Home from './Home';
import TotalMiles from '../mileages/TotalMiles';

const Leaderboard = ({user, miles, totalMiles, mileages, date, getAllMileages}) => {


  useEffect ( () => {
    getAllMileages()
  }, [])
  
  

   return (
      <div>
      {user.name} 
      <TotalMiles totalMiles={totalMiles}/>

      </div>
    );

  // if (user) {
  //   return (
  //     <>
  //     <MileageList mileages={mileages}/>

  //     </>
  //   )
  // } else {
  //   return (
  //     <>
  //       <Home />
  //     </>
  //   )
  // }
}

const ConnectedAuthDashboard = (props) => (
  <AuthConsumer>
    { value => <Leaderboard { ...props } { ...value } />}
  </AuthConsumer>
)

const ConnectedMileageDashboard = (props) => (
  <MileageConsumer>
    {value => <ConnectedAuthDashboard {...props} {...value} />}
  </MileageConsumer>
)

export default ConnectedMileageDashboard;
