import React from 'react'
// import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import NewTicketForm from './NewTicketForm'
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
          <Switch>
            <Route exact path='/' component={TicketList} />
            <Route path='/newticket' component={NewTicketForm} />
          </Switch>
        </div>
        <TicketList />
      </div>
    </div>
  )
}

export default App
