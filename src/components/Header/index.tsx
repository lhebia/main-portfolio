import React, { useState, useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import dp36 from '../../assets/dp36.png';

import "./styles.scss";

interface HeaderProps {
  light?: boolean,
}

const Header: React.FC<HeaderProps> = ({ light = false }) => {

  const [styleClass, setStyleClass] = useState('');

  const listenScrollEvent = (): void => {
    if (!light) {
      if (window.scrollY > 0) {
        setStyleClass(' active');
      } else {
        setStyleClass('');
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
    return () => {
      window.removeEventListener("scroll", listenScrollEvent)
    }
  }, [])

  useEffect(() => {
    if (light) {
      setStyleClass(' active');
    }
  }, [])

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          topNavLinks {
            blog
            contact
            portfolio
          }
        }
      }
    }
  `);

  const { title, topNavLinks } = data.site.siteMetadata;
  const { blog, contact, portfolio } = topNavLinks;

  return (
    <header className={ "flexed-header" + styleClass }>
      <div className="wrapper header-wrap">
        <div className="flex flex-align-center">
          <Link to="/">
            <img className="header-logo-img" src={ dp36 } alt="Logo for LawrenceHebia.com" />
          </Link>
          <Link to="/">
            <p className="header-title">{ title }</p>
          </Link>
        </div>
        <nav>
          <ul className="header-top-list">
            <li>
              <Link 
                to="/"
                activeClassName="active-class"
              >
                { portfolio }
              </Link>
            </li>
            <li>
              <Link 
                to="/blog"
                activeClassName="active-class"
              >
                { blog }
              </Link>
            </li>
            <li>
              <a
                className="contact-link"
                href="mailto:lawrencehebia@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                { contact }
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
