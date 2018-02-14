import React from 'react';
import Header from './Header';
// import Moment from 'moment';
import NewTicketControl from './NewTicketControl';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  handleAddingNewTicketToList(newTicket){
    let newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList});
  }

  render() {
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
              <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
              <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
