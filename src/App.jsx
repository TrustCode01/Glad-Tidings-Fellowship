import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Ministries from './pages/Ministries'
import MainService from './pages/MainService';
import Evangelism from './pages/Evangelism'
import NewConverts from './pages/NewConverts'
import MensFellowship from './pages/MensFellowship'
import WomensFellowship from './pages/WomensFellowship'
import Couples from './pages/Couples'
import SingleParents from './pages/SingleParents'
import Youth from './pages/Youths'
import ChildrenMinistry from './pages/ChildrenMinistry'
import Counselling from './pages/Counselling'
import Community from './pages/Community'
import LifeCoaching from './pages/LifeCoaching'
import Sermons from './pages/Sermons';
import Privacy from './pages/Privacy'
import Inspirations from './pages/Inspirations'
import React, { useEffect } from 'react';


function App() {
  useEffect(() => { if (location.hash === '#target-section' && targetRef.current) { targetRef.current.scrollIntoView({ behavior: 'smooth' }); } }, [location]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/sermons' element={<Sermons/> } />
            <Route path='/ministries' element={<Ministries/>}/>
            <Route path='/mainservice' element={<MainService/>}/>
            <Route path='/newconverts' element={<NewConverts/>} />
            <Route path='/evangelism' element={<Evangelism/>} />
            <Route path='/couples' element={<Couples/>} />
            <Route path='/mensfellowship' element={<MensFellowship/>} />
            <Route path='/womensfellowship' element={<WomensFellowship/>} />
            <Route path='/singleparents' element={<SingleParents/>} />
            <Route path='/youths' element={<Youth/>} />
            <Route path='/childrenministry' element={<ChildrenMinistry/>} />
            <Route path='/counselling' element={<Counselling/>} />
            <Route path='/community' element={<Community/>} />
            <Route path='/lifecoaching' element={<LifeCoaching/>} />
            <Route path='/counselling' element={<Counselling/>} />
            <Route path='/privacy' element={<Privacy/>}/>
            <Route path='/inspirations' element={<Inspirations />} />
          </Routes>
          
        </main>
      </div>
    </Router>
  );
}

export default App;