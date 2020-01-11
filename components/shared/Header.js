import React from 'react';
import Link from 'next/link';

import '../../styles/main.scss';

class Header extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <>
        <p>{title}</p>
        <p className='customStyleFromFile'>Hi This is meant to be red</p>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
        <Link href='/cv'>
          <a>Cv</a>
        </Link>
        <Link href='/portfolios'>
          <a>Portfolio</a>
        </Link>
        <style jsx='true'>
          {`
            a {
              font-size: 20px;
            }
          `}
        </style>
      </>
    );
  }
}

export default Header;
