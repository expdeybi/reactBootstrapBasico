import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Error from './components/Error'

function App() {

  const useGitHub = true;
  
  function renderComponents() {
    return (
      <>
        <Header/>
        <Routes>          
          <Route path="/" element={<Inicio/>} />
          <Route path="/Productos" element={<Productos/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </>
    );
  }

  return (
    <>
      {useGitHub ? (
        <HashRouter>
          {renderComponents()}
        </HashRouter>
      ) : (
        <BrowserRouter>
          {renderComponents()}
        </BrowserRouter>
      )}
     
      <Footer/>
    </>
  )
}

export default App
