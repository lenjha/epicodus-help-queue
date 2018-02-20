import React from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import NewTicketControl from './NewTicketControl';
import TicketList from './TicketList';
import Admin from './Admin';
import Error404 from './Error404';


class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(`APP PROPS: ${props}`);
    this.state = {
      selectedTicket: null
    };
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
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
    // let newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    // Object.keys(newMasterTicketList).forEach(ticketId => {
    //   newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    // });
    // this.setState({masterTicketList: newMasterTicketList});
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
              <Route exact path='/' render={()=><TicketList ticketList={this.props.masterTicketList} />} />
              <Route path='/newticket' render={()=><NewTicketControl />}/>
              <Route path='/admin' render={(props)=><Admin ticketList={this.props.masterTicketList} currentRouterPath={props.location.pathname} onTicketSelection={this.handleChangingSelectedTicket}
                selectedTicket={this.state.selectedTicket}/>} />
              <Route component={Error404} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterTicketList: state
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object
}

export default withRouter(connect(mapStateToProps)(App));
