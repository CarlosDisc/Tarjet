import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import CreateAccount from './components/CreateAccount';
import HomePage from './components/homePageComponents/HomePage';
import ProfilePage from './components/profilePageComponents/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import MyCards from './components/myCardsComponents/MyCards';
import MyFavorite from './components/myFavoritesComponents/MyFavorite';
import MySubscription from './components/mySubscriptionComponents/MySubscriptions';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    
      <Router>
        <Routes>
          {/*Rutas publicas*/}
          <Route path ="/" element={<HomePage/>}/>

          {/*Rutas protegidas*/}
          <Route path="/login" element={<Login/>}/>
          <Route path="/create-account" element={<CreateAccount/>}/>
          
          <Route element={<ProtectedRoute/>}>
              <Route path="/homepage" element ={<HomePage/>}/>
              <Route path="/profile" element={<ProfilePage/>}/>
              <Route path="/mycards" element={<MyCards/>}/>
              <Route path="/favorites" element={<MyFavorite/>}/>
              <Route path="/subscription" element={<MySubscription/>}/>
          </Route>

          {/*Otras rutas publicas*/}

          

        </Routes>
      </Router>
    
  );
}

export default App
  