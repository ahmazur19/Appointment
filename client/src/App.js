import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import {Container} from 'semantic-ui-react'
import NavBar from './components/NavBar';
import About from './pages/About';
import { PRIMARY_COLOR } from './styles';
import ComponentDemo from './pages/ComponentDemo';
import Patients from './components/Patients';
import Doctors from './components/Doctors';
import Appointments from './components/Appointments';

function App() {

  return (
    <>
    <NavBar />
    <h1 style={{color: PRIMARY_COLOR }}>sdf</h1>
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/patient' component={Patients} />
        <Route exact path='/doctor' component={Doctors} />
        <Route exact path='/appointment' component={Appointments} />
        <Route exact path='/componentDemo' component={ComponentDemo} />
        
      </Switch>
      </Container>
   </>
  );
}

export default App;
