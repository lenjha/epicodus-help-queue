import React from 'react';
import { Link } from 'react-router-dom';

function Error404(props){
  return (
    <div>
      <style jsx>{`
        background: crimson;
      `}</style>
      ERROR 404
      <h4>The page {props.location.pathname} does not exist.</h4>
      Click <Link to="/">here</Link> to return.
    </div>
  );
}

export default Error404;
