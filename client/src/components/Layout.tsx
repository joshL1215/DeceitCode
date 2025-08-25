import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function Layout() {
    return (
        <div className="flex flex-col max-h-screen">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Layout;
