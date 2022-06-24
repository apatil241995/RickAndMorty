import './App.css';
import Characinfo from "./reactFiles/characterInfo"
import FavouriteInfo from './reactFiles/Favourite/favouriteInfo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Characinfo />} />
        <Route path='/favInfo' element={<FavouriteInfo />} />
      </Routes>
    </Router>
  )
}


export default App;
