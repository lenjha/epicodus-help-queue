import React from 'react'

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
      </div>
    </div>
  )
}

export default Header
