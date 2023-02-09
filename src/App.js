import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';
import ProfileComponent from './profile/ProfileComponent';
import profilepic from './Assets/profilepicture.jpg';
import pic from './Assets/picture.jpg'

function App() {
  
  return (
    <div className="App">
      <ProfileComponent  alert= 'Zied REKHISS' src={profilepic} fullName='Zied REKHISS' bio='Geologist' profession='HSE Instructor'/>
    </div>
  );
}

export default App;

ProfileComponent.defaultProps={
  alert:'user', src:pic, fullName:'fullName', bio:'bio', profession:'profession'
}

ProfileComponent.PropTypes = {
alert:PropTypes.string,
fullName:PropTypes.string,
bio:PropTypes.string,
profession: PropTypes.string,
src: PropTypes.any
}