import React from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { UserDetailProvider } from './contexts/UserContext'
import { BackendDetailProvider } from './contexts/BackendContext'

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
            <BackendDetailProvider>

                <UserDetailProvider>
                    <SideBar />
                    <div>
                        <Header />
                        <div className='outlet'>
                            <Outlet />
                        </div>
                        <Footer />
                    </div>
                </UserDetailProvider>
            </BackendDetailProvider>
        </div>
    )
}

export default App