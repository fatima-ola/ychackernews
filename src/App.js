import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './components/Landing';


const App = ()=> {
  return (
    <Landing />
    // <BrowserRouter>
    //     <Switch>
    //       <Route exact path="/">
    //         <Landing />
    //       </Route>

    //       {/* <Route path="/signin">
    //         <Signin />
    //       </Route>
    //       <Route path="/dashboard">
    //         <Dashboard  handleLogout={handleLogout} displayName={user}/>
    //       </Route>
    //       <Route path="/profile">
    //         <Profile />
    //       </Route>
    //       <Route path="/products">
    //         <Products displayName={user}/>
    //       </Route> */}
    //     </Switch>
    //   </BrowserRouter>
  );
}

export default App;
