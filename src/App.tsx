import styles from "./components/Site.module.css";
import {Adidas, adidasArr} from "./components/pages/Adidas";
import {Puma, pumaArr} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes, useLocation} from 'react-router-dom'
import {Error404} from "./components/pages/Error404";
import {S} from './components/pages/_styles'
import {Model} from "./components/pages/Model";
import React from "react";
import {Prices} from "./components/pages/Prices";


const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE4: '/:model/:id',
    PAGE5: '/prices',
    ERROR404: '/error404',

} as const // значение св-ва не может быть изменено


function App() {

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE5}>Wholesale prices</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={'/adidas'}/>}/>
                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path={PATH.PAGE4} element={<Model/>} />
                        <Route path={PATH.PAGE5} element={<Prices/>} />
                        <Route path="/*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

function NotFound() {
    const location = useLocation();
    return <Error404 path={location.pathname}/>
}


export default App;

