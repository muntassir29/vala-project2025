// src/components/CalendarView.jsx
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import { format } from "date-fns";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { fr } from "date-fns/locale";
// import { parseISO } from "date-fns";
// import { useMemo } from "react";
// import { fr as momentFR } from "moment/locale/fr";
// import moment from "moment";

// moment.updateLocale("fr", momentFR);
// const localizer = momentLocalizer(moment);

// const CalendarView = ({ trades }) => {
//   const events = useMemo(() => {
//     return trades.map((trade) => ({
//       title: `${trade.pair} (${trade.winOrLoss})`,
//       start: parseISO(trade.dateOpen),
//       end: parseISO(trade.dateOpen),
//       allDay: true,
//       resource: trade,
//     }));
//   }, [trades]);

//   const eventStyleGetter = (event) => {
//     const bgColor =
//       event.resource.winOrLoss === "Win" ? "#34d399" : "#f87171"; // green/red
//     return {
//       style: {
//         backgroundColor: bgColor,
//         borderRadius: "6px",
//         color: "white",
//         border: "none",
//         padding: "4px",
//       },
//     };
//   };

//   const onSelectEvent = (event) => {
//     alert(
//       `Trade: ${event.title}\nDate: ${format(
//         event.start,
//         "dd/MM/yyyy",
//         { locale: fr }
//       )}\nRésultat: ${event.resource.result} pips\nStratégie: ${event.resource.strategy}`
//     );
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-md p-4 mt-8">
//       <h2 className="text-xl font-bold text-gray-700 mb-4">📆 Vue Calendrier</h2>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//         eventPropGetter={eventStyleGetter}
//         onSelectEvent={onSelectEvent}
//       />
//     </div>
//   );
// };

// export default CalendarView;


// src/components/CalendarView.jsx
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { parseISO } from "date-fns";
// import { useMemo } from "react";
// import "moment/locale/fr";

// // Configuration de moment en français
// moment.locale("fr");
// const localizer = momentLocalizer(moment);

// const CalendarView = ({ trades }) => {
//   const events = useMemo(() => {
//     return trades.map((trade) => ({
//       title: `${trade.pair} (${trade.winOrLoss})`,
//       start: parseISO(trade.dateOpen),
//       end: parseISO(trade.dateOpen),
//       allDay: true,
//       resource: trade,
//     }));
//   }, [trades]);

//   const eventStyleGetter = (event) => {
//     const bgColor = event.resource.winOrLoss === "Win" ? "#34d399" : "#f87171";
//     return {
//       style: {
//         backgroundColor: bgColor,
//         borderRadius: "6px",
//         color: "white",
//         border: "none",
//         padding: "4px",
//       },
//     };
//   };

//   const onSelectEvent = (event) => {
//     alert(
//       `Trade: ${event.title}\nDate: ${moment(event.start).format("DD/MM/YYYY")}\nRésultat: ${event.resource.result} pips\nStratégie: ${event.resource.strategy}`
//     );
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-md p-4 mt-8">
//       <h2 className="text-xl font-bold text-gray-700 mb-4">📆 Vue Calendrier</h2>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//         eventPropGetter={eventStyleGetter}
//         onSelectEvent={onSelectEvent}
//         defaultView="month"
//         views={["month", "week", "day", "agenda"]}
//         popup
//         toolbar
//         messages={{
//           today: "Aujourd'hui",
//           previous: "Précédent",
//           next: "Suivant",
//           month: "Mois",
//           week: "Semaine",
//           day: "Jour",
//           agenda: "Agenda",
//           date: "Date",
//           time: "Heure",
//           event: "Événement",
//           noEventsInRange: "Aucun trade pour cette période.",
//         }}
//       />
//     </div>
//   );
// };

// export default CalendarView;

// src/components/CalendarView.jsx
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/fr';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { parseISO } from 'date-fns';
import { useMemo, useState } from 'react';
import TradeModal from './TradeModal'; // On suppose que tu as déjà le modal
moment.locale('fr');

const localizer = momentLocalizer(moment);

const CalendarView = ({ trades }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = useMemo(() => {
    return trades.map((trade) => ({
      title: `${trade.pair} (${trade.winOrLoss})`,
      start: parseISO(trade.dateOpen),
      end: parseISO(trade.dateOpen),
      allDay: true,
      resource: trade,
    }));
  }, [trades]);

  const eventStyleGetter = (event) => {
    const bgColor = event.resource.winOrLoss === 'Win' ? '#34d399' : '#f87171';
    return {
      style: {
        backgroundColor: bgColor,
        borderRadius: '6px',
        color: 'white',
        border: 'none',
        padding: '4px',
      },
    };
  };

  const onSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mt-8">
      <h2 className="text-xl font-bold text-gray-700 mb-4">📆 Vue Calendrier</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter}
        onSelectEvent={onSelectEvent}
        defaultView="month"
        views={['month', 'week', 'day', 'agenda']}
        popup
        toolbar
        messages={{
          today: "Aujourd'hui",
          previous: 'Précédent',
          next: 'Suivant',
          month: 'Mois',
          week: 'Semaine',
          day: 'Jour',
          agenda: 'Agenda',
          date: 'Date',
          time: 'Heure',
          event: 'Événement',
          noEventsInRange: 'Aucun trade pour cette période.',
        }}
      />

      {selectedEvent && (
        <TradeModal
          event={selectedEvent}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default CalendarView;






