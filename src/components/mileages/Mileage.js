import { userEffect, useState } from 'react';
import MileageForm from './MileageForm';
import { AuthConsumer} from '../../providers/AuthProvider';
import { MileageConsumer} from '../../providers/MileageProvider';

const Mileage = ({id, user, updateMileage, deleteMileage, miles, date, }) => {
  const [editing, setEdit] = useState(false)


  return(
    <>
      <h1>User: {user.email}</h1>
      <h2>{date} Miles Covered:{miles}</h2>
    </>
  )
}

const ConnectedAuthMileage = (props) => (
  <AuthConsumer>
    { value=> <Mileage {...props} {...value} /> }
  </AuthConsumer>
)
const ConnectedMileage = (props) => (
  <MileageConsumer>
    { value=> <ConnectedAuthMileage {...props} {...value} /> }
  </MileageConsumer>
)

export default ConnectedMileage;