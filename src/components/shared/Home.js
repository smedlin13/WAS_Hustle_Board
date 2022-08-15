import { AuthConsumer } from "../../providers/AuthProvider";
import Mileages from '../mileages/Mileages'
import Login from '../auth/Login';
import Register from '../auth/Register';

const Home = ({user}) => {
  {/* <h3>WAS Hustle Mileage Form</h3>
    <Mileages /> */}
  if (user) {
      return (
        <>       
          <Login />
        </>
       )
       }
    else {
    return (
      <>
        <Register />
      </>
    )
  }
}

const ConnectedHome = (props) => (
  <AuthConsumer> 
    { value => <Home { ...props } { ...value } /> }
  </AuthConsumer>
)
export default ConnectedHome;