import { useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { Logo } from '../../common/Misc/SVGComponents';
import { useStars } from '../../../hooks/useStars';
import star from '../../../assets/common/star.svg';
import './DisplayHeader.css';

const DisplayHeader = ({ activeItem }) => {
  const navRef = useRef(null);
  const starCountRef = useRef(null);
  const stars = useStars();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (stars && starCountRef.current) {
      gsap.fromTo(starCountRef.current,
        {
          scale: 0,
          width: 0,
          opacity: 0
        },
        {
          scale: 1,
          width: "100px",
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1)"
        }
      );
    }
  }, [stars]);

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className='header-container'>
        <Link to="/" className="logo" onClick={handleHomeClick}>
          <Logo />
        </Link>

        <div className="nav-cta-group">
          <nav className="landing-nav-items" ref={navRef}>
            <Link
              className={`nav-link ${activeItem === 'home' && 'active-link'}`}
              to="/"
              onClick={handleHomeClick}
            >
              Home
            </Link>
            <Link className='nav-link' to="/about">About</Link>
            <Link className='nav-link' to="/team">Team</Link>
            {/* <Link className={`nav-link ${activeItem === 'showcase' && 'active-link'}`} to="/showcase">Showcase</Link> */}
          </nav>

        
        </div>
      </div>
    </header>
  );
};

export default DisplayHeader;