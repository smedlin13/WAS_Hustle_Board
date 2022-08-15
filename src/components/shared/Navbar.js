import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';

const Navbar = ({user, handleLogout }) => {
  
  const rightNavItems = () => {
    // links to show up when logged in
    if (user) {
      return (
        <>         
          <li onClick={ () => handleLogout() }>
            Logout
          </li>
          <Link to='/profile'>
            <li>
              Profile
            </li>
          </Link>
          <Link to='/mileages'>
            <li>
              Miles Covered
            </li>
          </Link>
          <Link to='/leaderboard'>
            <li>
              Leaderboard
            </li>
          </Link>
        </>
      )
    } else {
      // links to show up when Not logged in
      return (
        <>
          <Link to='/login'>
            <li>
              Login
            </li>
          </Link>
          <Link to='/register'>
            <li>
              Register
            </li>
          </Link>
          <Link to='/leaderboard'>
            <li>
              Leaderboard
            </li>
          </Link>
        </>
      )
    }
  }
  
  // links that show up regardless of login or out
  return (
    <>
      <nav>
        <ul>
          <Link to='/'>
            <li>
              Home
            </li>
          </Link>
            { rightNavItems() }
        </ul>
      </nav>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer> 
    { value => <Navbar { ...props } { ...value } /> }
  </AuthConsumer>
)
 
export default ConnectedNavbar;