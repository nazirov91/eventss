import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import EventListItem from './EventListItem.jsx';

class EventList extends Component {
  render() {
    return (
      <div>
        <h1>EventList</h1>
        <EventListItem/>
        <EventListItem/>
        <EventListItem/>
      </div>
    )
  }
}
export default EventList;