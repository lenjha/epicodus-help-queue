import React from 'react'
// import ReactDOM from 'react-dom'
import Header from './Header'
import TicketList from './TicketList'


function App() {
  return (
    <div>
      <style jsx global>{`
        body {
          font-family: Helvetica;
        }
        .box {
          border: none;
          display: block;
          border-bottom: 2px solid #fff;
          margin-bottom: 10px;
        }
        .box:hover {
          border-bottom: 2px solid #ccc;
          outline: 0;
        }
        a {
          color: #888;
          text-decoration: none;
        }
      `}</style>
      <div style={{margin: '19px auto 0', width: 800}}>
        <div className="box">
          <Header />
        </div>
        <TicketList />
      </div>
    </div>
  )
}

export default App
