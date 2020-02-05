import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import '../App.css'
export default class Calendar extends Component {

    render(){

        return (
            <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} 
            events = {[
                {title: 'Today',
                 date: '2020-02-03'}
            ]}
            dateClick={this.handleDateClick}
            />
        )
    }
    // handleDateClick = arg => {
    //     if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
    //       this.setState({
    //         // add new event data
    //         calendarEvents: this.state.calendarEvents.concat({
    //           // creates a new array
    //           title: "New Event",
    //           start: arg.date,
    //           allDay: arg.allDay
    //         })
    //       });
    //     }
    //   };
    }
    


