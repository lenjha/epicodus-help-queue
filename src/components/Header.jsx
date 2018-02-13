import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx>{`
        h1 {
          font-size: 87px;
          margin-bottom: 20px;
          color: red;
        }
      `}</style>
      <div style={{borderStyle: 'solid', borderWidth: '5px', borderColor: 'blue', textAlign: 'center'}}>
        <h1>Help Queue</h1>
        <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      </div>
    </div>
  );
}

export default Header;
