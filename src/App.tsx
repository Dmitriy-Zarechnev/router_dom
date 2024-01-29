import React from 'react'
import {PageOne} from './components/pages/PageOne'
import {PageTwo} from './components/pages/PageTwo'
import {PageThree} from './components/pages/PageThree'
import {Navigate, NavLink, Route, Routes} from 'react-router-dom'
import {Error404} from './components/pages/Error404'
import {S} from './components/_styles'

const PATH = {
    PAGE1: '/pageOne',
    PAGE2: '/pageTwo',
    PAGE3: '/pageThree',
    ERRORPAGE: '/error404'
} as const


function App() {
    return (
        <S.Body>
            <S.Header><S.HeaderTitle>HEADER</S.HeaderTitle></S.Header>

            <S.ContentWrapper>
                <S.Navigation>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
                </S.Navigation>

                <S.Content>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>

                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>

                        {/*<Route path={PATH.ERRORPAGE} element={<Error404/>}/>*/}
                        {/*<Route path={'/*'} element={<Navigate to={PATH.ERRORPAGE}/>}/>*/}

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </S.Content>
            </S.ContentWrapper>

            <S.Footer>Mickrotasks 2024</S.Footer>
        </S.Body>
    )
}

export default App

