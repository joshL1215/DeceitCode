import siteLogo from '../assets/site-logo.svg';

function NavBar() {
    return (
        <nav className="flex flex-row justify-between items-center p-2px pr-5 bg-gray-100">
            <img className="w-50 h-20" src={siteLogo} />
            <div className='flex flex-row'>
                hi
                hi
                hi

            </div>
        </nav>
    );
}

export default NavBar;