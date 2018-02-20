import ticketListReducer from './../../src/reducers/ticket-list-reducer';

describe('ticketListReducer', () => {

  let action;
  const sampleTicketData = {
    names : 'Lena & Luke',
    location : '2B',
    issue : 'Jest is being a diva and wont work with Webpack!',
    timeOpen : 1500000000000,
    id: 0
  };

    // 'list' referring to CASES inside ticket list reducer
  test('should return default state if action type is null or not on list', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test('should successfully add new ticket data to masterTicketList', () => {
    const { names, location, issue, timeOpen, id } = sampleTicketData;
    // vvv PAYLOAD vvv
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id
    };
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id
      }
    });
  });
});
