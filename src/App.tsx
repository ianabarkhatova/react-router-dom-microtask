import styles from "./components/Site.module.css";
import {NavLink, useLocation, Outlet} from 'react-router-dom'
import {Error404} from "./components/pages/Error404";
import {S} from './components/pages/_styles'
import React from "react";


export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    MODEL: '/:model/:id',
    PRICES: '/prices',
    ERROR404: '/error404',
    PROTECTED_PAGE: '/protected-page',
    // PAGE_NOT_FOUND: '/*',
    MAIN: '/',
    LOGIN: '/login'

} as const // значение св-ва не может быть изменено


function App() {

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>Wholesale prices</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PROTECTED_PAGE}>Protected Page</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Outlet />
                    {/*<Routes>*/}
                    {/*    <Route path="/" element={<Navigate to={'/adidas'}/>}/>*/}
                    {/*    <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
                    {/*    <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
                    {/*    <Route path={PATH.PAGE3} element={<Abibas/>}/>*/}
                    {/*    <Route path={PATH.PAGE4} element={<Model/>} />*/}
                    {/*    <Route path={PATH.PAGE5} element={<Prices/>} />*/}
                    {/*    <Route path="/*" element={<NotFound/>}/>*/}
                    {/*</Routes>*/}
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export function NotFound() {
    const location = useLocation();
    return <Error404 path={location.pathname}/>
}


export default App;

