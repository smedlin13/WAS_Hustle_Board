import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Routes, Route } from 'react-router-dom';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Mileages from './components/mileages/Mileages';
import MileageShow from './components/mileages/MileageShow';
import Leaderboard from './components/shared/Leaderboard';
import Profile from './components/auth/Profile';
// import TotalMiles from './components/mileages/TotalMiles';

const App = () => (
  <>
    <Navbar />
    <FetchUser >
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route exact path="/mileages" element={<Mileages />} />
          <Route exact path="/mileages/:mileageId" element={<MileageShow />} />
          <Route exact path="/leaderboard" element={<Leaderboard />} />
          <Route exact path="/profile" element={<Profile />} />
          {/* <Route exact path="/TotalMiles" element={<TotalMiles />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </>
    </FetchUser>
  </>
)

export default App;
