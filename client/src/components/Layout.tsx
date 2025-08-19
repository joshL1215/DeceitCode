import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function Layout() {
    return (
        <div className="flex flex-col max-h-screen">
            <div>
                <NavBar />
            </div>
            <div className="h-screen">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;
