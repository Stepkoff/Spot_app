import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {links} from '../../assets/constants';
import {RiCloseLine} from 'react-icons/ri';
import {HiOutlineMenu} from 'react-icons/hi';
import s from './sidebar.module.scss';

interface INavLinksProps {
  handleClick: () => void
}
const NavLinks:React.FC<INavLinksProps> = ({handleClick}) => {
  return (
    <div className={s.sidebar__nav}>
      {links.map(link => (
        <NavLink
          key={link.name}
          to={link.to}
          onClick={handleClick}
        >
          <link.icon />{link.name}
        </NavLink>)
      )}
    </div>
  )
}

const SideBar:React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  }
  return (
    <div className={s.sideBar}>
      <div className={s.sideBar__Burger}>
        {mobileMenuOpen ?
          (<RiCloseLine onClick={() => setMobileMenuOpen(false)} />)
          :
          <HiOutlineMenu onClick={() => setMobileMenuOpen(true)} />}
      </div>
      <div className={`${mobileMenuOpen ? `${s.sideBar__content} ${s.sideBar__active}`: s.sideBar__content}`}>
        <p>Spoty</p>
        <NavLinks handleClick={handleNavClick}/>
      </div>
    </div>
  );
};

export default SideBar;