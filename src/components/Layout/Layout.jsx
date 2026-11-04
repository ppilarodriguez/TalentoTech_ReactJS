import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export function Layout({children}){
    return (
        <>
        <Header/>
        <main>
            {}
            <Outlet />
        </main>
        <Footer/>
        </>
    );
}
