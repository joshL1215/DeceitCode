import siteLogo from '../assets/site-logo.svg';

function NavBar() {
    return (
        <nav className="flex flex-row justify-between items-center px-5 bg-[#DCE0D9]">
            <img className="max-h-20" src={siteLogo} />
            <div className='flex flex-row'>
                hi
                hi
                hi

            </div>
        </nav>
    );
}

export default NavBar;