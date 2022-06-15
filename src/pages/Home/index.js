import React from 'react';
import Header from '../../components/Header';
import Introduction from '../../components/Introduction.js';
import Warning from '../../components/Warning.js';



function Home() {
    return (
        <div className='container'>
            <div className='introduction-container'> {/* Esquerda*/}
                
                <Header />
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