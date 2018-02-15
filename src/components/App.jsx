import React from 'react';
// import Moment from 'moment';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import NewTicketControl from './NewTicketControl';
import TicketList from './TicketList';
import Admin from './Admin';
import Error404 from './Error404';
import { v4 } from 'uuid';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: {},
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  handleAddingNewTicketToList(newTicket){
    let newTicketId = v4();
    let newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
      [newTicketId]: newTicket
    });
    newMasterTicketList[newTicketId].formattedWaitTime = newMasterTicketList[newTicketId].timeOpen.fromNow(true);
    this.setState({masterTicketList: newMasterTicketList});

    // let newMasterTicketList = this.state.masterTicketList.slice();
    // newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    // newMasterTicketList.push(newTicket);
    // this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelectedTicket(ticketId){
    this.setState({selectedTicket: ticketId});
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    5000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(ticketId => {
      newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    });
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
              <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />}/>
              <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname} onTicketSelection={this.handleChangingSelectedTicket}
                selectedTicket={this.state.selectedTicket}/>} />
              <Route component={Error404} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
