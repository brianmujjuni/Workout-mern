
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//pages and componets
import Home from './pages/Home'
import Navbar from './componets/Navbar';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar>
          <div className='pages'>
              <Routes>
                <Route path='/' element={<Home />} />
              </Routes>
            </div>
        </Navbar>
         <Home/>
     </BrowserRouter>
    </div>
  );
}

export default App;
