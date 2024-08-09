import Home from '@/pages/clients/Home'
import NotFound from '@/pages/NotFound';
import { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom'

const ClientRoutes = () => {
    const location = useLocation();
    const route = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/about', element: <h1>About</h1> },
        { path: '/contact', element: <h1>Contact</h1> },
        { path: '*', element: <NotFound /> }
    ])
    useEffect(() => {
        switch (location.pathname) {
            case '/':
                window.document.title = 'Trang chủ';
                break;
            case '/about':
                window.document.title = 'Giới thiệu';
                break;
            case '/contact':
                window.document.title = 'Liên hệ';
                break;
            default:
                window.document.title = 'Trang không tồn tại';
                break;
        }
    }, [location.pathname]);
    return route
}

export default ClientRoutes