import React from 'react'
import {Adidas} from './components/pages/Adidas'
import {Puma} from './components/pages/Puma'
import {Abibas} from './components/pages/Abibas'
import {Navigate, NavLink, Route, Routes} from 'react-router-dom'
import {Error404} from './components/pages/Error404'
import {S} from './components/_styles'
import {Model} from './components/pages/Model'
import img1 from './assets/Adidas_1.webp'
import img2 from './assets/Adidas_2.webp'
import img3 from './assets/Adidas_3.webp'
import img4 from './assets/Puma_1.jpg'
import img5 from './assets/Puma_2.jpg'
import img6 from './assets/Puma_3.jpg'
import img7 from './assets/Abibas_1.webp'
import img8 from './assets/Abibas_2.jpg'
import img9 from './assets/Abibas_3.jpg'
import {Prices} from './components/pages/Prices'

export const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE4: '/prices',
    MODEL1: '/adidas/:id',
    MODEL2: '/puma/:id',
    MODEL3: '/abibas/:id',
    ERRORPAGE: '/error404'
} as const

export type SnikersItem = {
    id: number
    model: string
    collection: string
    price: string
    picture: string
}


function App() {

    const adidasArr: SnikersItem[] = [
        {
            id: 1,
            model: 'ADIDAS ADIFOM TRXN',
            collection: 'new collection1',
            price: '100200$',
            picture: img1
        },
        {
            id: 2,
            model: 'ADIDAS ADIFOM SUPER',
            collection: 'new collection22',
            price: '200300$',
            picture: img2
        },
        {
            id: 3,
            model: 'ADIDAS SUPER SUPERSKI',
            collection: 'new collection333',
            price: '300400$',
            picture: img3
        }
    ]

    const pumaArr: SnikersItem[] = [
        {
            id: 1,
            model: 'Puma trinity',
            collection: 'Collection 2022',
            price: '1000$',
            picture: img4
        },
        {
            id: 2,
            model: 'Puma PX-C',
            collection: 'Collection 2023',
            price: '2000$',
            picture: img5
        },
        {
            id: 3,
            model: 'Puma HulkBuster',
            collection: 'Collection 2024',
            price: '3000$',
            picture: img6
        }
    ]

    const abibasArr: SnikersItem[] = [
        {
            id: 1,
            model: 'Abibas Mili',
            collection: 'forever collection 25',
            price: '10000$',
            picture: img7
        },
        {
            id: 2,
            model: 'Abibas SuperSlim',
            collection: 'forever collection 30',
            price: '30000$',
            picture: img8
        },
        {
            id: 3,
            model: 'Abibas Hardbus',
            collection: 'forever collection 35',
            price: '50000$',
            picture: img9
        }
    ]

    return (
        <S.Body>
            <S.Header><S.HeaderTitle>HEADER</S.HeaderTitle></S.Header>

            <S.ContentWrapper>
                <S.Navigation>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE4}>Prices</NavLink></S.NavWrapper>
                </S.Navigation>

                <S.Content>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas itemsArr={adidasArr}/>}/>
                        <Route path={PATH.PAGE2} element={<Puma itemsArr={pumaArr}/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas itemsArr={abibasArr}/>}/>
                        <Route path={PATH.PAGE4} element={<Prices/>}/>

                        <Route path={PATH.MODEL1} element={<Model itemsArr={adidasArr}/>}/>
                        <Route path={PATH.MODEL2} element={<Model itemsArr={pumaArr}/>}/>
                        <Route path={PATH.MODEL3} element={<Model itemsArr={abibasArr}/>}/>

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

