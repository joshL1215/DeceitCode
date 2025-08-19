import siteLogo from '../assets/site-logo.svg';

function NavBar() {
    return (
        <nav className="flex flex-row justify-between items-center px-5 bg-[#DCE0D9]">

            {/* Logo */}
            <a href="/">
                <img className="max-h-20" src={siteLogo} />
            </a>

            {/* Nav Buttons */}
            <div className='flex flex-row gap-5'>
                <a href="/">Home</a>
                <a href="/workspace">Code</a>
                <a href="/settings">Settings</a>
            </div>

        </nav>
    );
}

export default NavBar;