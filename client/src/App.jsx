import './App.css'
import Gallery from './components/Gallery/Gallery'
import LeftBar from './components/leftBar/leftBar'
import TopBar from './components/topBar/topBar'

function App() {
 
  return (
    <div className='app'>
        <LeftBar/>
      <div className='content'>
        <TopBar/>
        <Gallery/>
      </div> 
    </div>
  )
}

export default App
