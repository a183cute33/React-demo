import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => {
  const StyleSheet = {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#FF2E63',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };
  return (
    <div style={StyleSheet}>
      <nav>
        <Link to='/home'>點我連到第一頁</Link>
        <Link to='/second' style={{ marginLeft: '20px' }}>
          點我連到第二頁
        </Link>
        {props.children}
      </nav>
    </div>
  );
};

export default Layout;
