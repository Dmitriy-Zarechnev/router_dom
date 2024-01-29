import React from 'react'
import styles from './components/Site.module.css'
import {PageOne} from './components/pages/PageOne'
import {PageTwo} from './components/pages/PageTwo'
import {PageThree} from './components/pages/PageThree'
import {Route, Routes} from 'react-router-dom'
import {Error404} from './components/pages/Error404'


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>

            <div className={styles.body}>
                <div className={styles.nav}>
                    Здесь будет навигация
                </div>

                <div className={styles.content}>
                    <Routes>
                        <Route path={'/pageOne'} element={<PageOne/>}/>
                        <Route path={'/pageTwo'} element={<PageTwo/>}/>
                        <Route path={'/pageThree'} element={<PageThree/>}/>
                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>

            <div className={styles.footer}>abibas 2024</div>
        </div>
    )
}


export default App
