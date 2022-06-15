import React from 'react';
import Introduction from '../../components/Introduction.js';
import Warning from '../../components/Warning.js';
import homeIcon from '../../Images/Icons/Home.png';
import userIcon from '../../Images/Icons/User.png';


function Home() {
    return (
        <div className='container'>
            <div className='introduction-container'> {/* Esquerda*/}
                <header className='header'>
                    <div className='home'>
                        <div className='home-icon'>
                            <img src={homeIcon} alt="home"/>
                        </div>
                        <div className='home-link'>
                            <span>Home</span>
                        </div>
                    </div>

                    <div className='user'>
                        <div className='user-link'>
                        <span>Login</span>
                        </div>

                        <div className='user-icon'>
                        <img src={userIcon} alt="user"/>
                        </div>
                    </div>
                </header>

                <div className='introduction'>

                    <Introduction/>

                    <footer className='footer'>
                        <Warning/>
                    </footer>
                </div>
            </div>

            <div className='main-container'> {/* Direita*/}
                <main className='main'>

                </main>
            </div>
        </div>
    )
}

export default Home;