import { NavLink } from 'react-router-dom';
import Profile from '../Images/profile.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState('block');
    const [showMenuIcon, setShowMenuIcon] = useState('#00000044');

    let deviceWidth = window.innerWidth;

    useEffect(() => {
        if (deviceWidth < 800) {
            setShowMenu('none')
        }
    }, [])

    const showNavItems = () => {
        if (showMenu === 'none') {
            setShowMenu('block');
            setShowMenuIcon('#1976d2')
        } else if (deviceWidth < 800) {
            setShowMenu('none');
            setShowMenuIcon('#00000099')
        }
    }

    return (
        <>
            <div className="details">
                <div
                    className="mobile-menu"
                    onClick={showNavItems}
                    style={{ backgroundColor: showMenuIcon }}
                >
                    <MenuIcon className='icon' />
                </div>
                <div className="profile">
                    <img src={Profile} alt="profile" />
                </div>
                <div className="myName">
                    <h2>Niket Kumar Mishra</h2>
                    <h4>Student | Developer</h4>
                </div>
                <div className="social">
                    <a href="https://github.com/niketvns">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/niket-kumar-mishra-37ab5a215/">
                        <LinkedInIcon />
                    </a>
                    <a href="https://twitter.com/Niketmishravns">
                        <TwitterIcon />
                    </a>
                    <a href="mailto:niketvns97@gmail.com">
                        <EmailIcon />
                    </a>
                </div>
            </div>
            <div
                className='nav-items'
                style={{ display: showMenu }}
            >
                <ul>
                    <NavLink
                        to='/'
                        className={({ isActive }) => (isActive ? 'active' : 'inActive')}
                        onClick={showNavItems}
                    >
                        <li><HomeIcon />Home</li>
                    </NavLink>
                    <NavLink
                        to='/projects'
                        className={({ isActive }) => (isActive ? 'active' : 'inActive')}
                        onClick={showNavItems}
                    >
                        <li><FolderSpecialIcon />Projects</li>
                    </NavLink>
                    <NavLink
                        to='/blogs'
                        className={({ isActive }) => (isActive ? 'active' : 'inActive')}
                        onClick={showNavItems}
                    >
                        <li><AutoStoriesIcon />Blogs</li>
                    </NavLink>
                    <NavLink
                        to='/about'
                        className={({ isActive }) => (isActive ? 'active' : 'inActive')}
                        onClick={showNavItems}
                    >
                        <li><InfoIcon />About</li>
                    </NavLink>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) => (isActive ? 'active' : 'inActive')}
                        onClick={showNavItems}
                    >
                        <li><ContactsIcon />Contact</li>
                    </NavLink>
                </ul>
            </div>
        </>
    );
}

export default Navbar;