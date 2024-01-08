import React from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import QuickOptions from './components/home/QuickOptions'
import Courses from './pages/Courses'
import About from './pages/About'
import Teachers from './pages/Teachers'
import TeachProfile from './pages/TeacherProfile'
import Contact from './pages/Contact'
import Login from './pages/Login'
import PlayList from './pages/Playlist'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Update from './pages/Update'

const App = () => {

    window.onscroll = () => {
        const profile = document.querySelector('.header .flex .profile');
        const search = document.querySelector('.header .flex .search-form');
        const sideBar = document.querySelector('.side-bar');
        const body = document.body;

        profile.classList.remove('active');
        search.classList.remove('active');

        if (window.innerWidth < 1200)
        {
            sideBar.classList.remove('active');
            body.classList.remove('active');
        }
    };
    return (
        <div>
            <Header />
            <SideBar />
            <div>
                {/* <PlayList /> */}
                {/* <Login /> */}
                {/* <Contact /> */}
                {/* <Teachers /> */}
                {/* <TeachProfile /> */}
                {/* <About /> */}
                {/* <QuickOptions /> */}
                {/* <Courses /> */}
                {/* <Profile /> */}
                {/* <Register /> */}
                <Update />
            </div>

            <Footer />
        </div>
    )
}

export default App