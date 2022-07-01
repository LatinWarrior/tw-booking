import { Route, Routes } from 'react-router-dom';

import './css/styles.css';

import { Home } from './pages/home/Home';
import { Hotel } from './pages/hotel/Hotel';
import { HotelList } from './pages/hotel-list/HotelList';
import { AboutUs } from './pages/about-us/AboutUs';
import { PageNotFound } from './pages/page-not-found/PageNotFound';

import { CustomNavbar } from './components/custom-navbar/CustomNavbar';
import { Fragment } from 'react';
import { Footer } from 'react-daisyui';
import { CustomFooter } from './components/custom-footer/CustomFooter';

function App() {
    return (
        <Fragment>
            <div className='h-screen'>
                <CustomNavbar />
                <div class='w-full h-full bg-pink-500'>
                    {/* <main
                        role='main'
                        class='w-full h-full border-yellow-600 bg-indigo-200'> */}
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/hotels' element={<HotelList />} />
                        <Route path='/hotels/:id' element={<Hotel />} />
                        <Route path='/about' element={<AboutUs />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                    {/* </main> */}
                </div>
                <CustomFooter />
            </div>
        </Fragment>
    );
}

export default App;
