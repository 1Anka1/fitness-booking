import { ScheduleXCalendar, useCalendarApp } from '@schedule-x/react';
import '@schedule-x/theme-default/dist/index.css';
import { useEffect, useMemo, useState } from 'react';
import '@schedule-x/theme-default/dist/index.css';
import { selectEvents } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { createEventsServicePlugin } from '@schedule-x/events-service';
import { createViewDay, createViewMonthGrid, createViewWeek } from '@schedule-x/calendar';
import * as SC from './Calendar.styled';
export function Calendar() {
  const events = useSelector(selectEvents);
  const eventsService = useState(() => createEventsServicePlugin())[0];

  const toZoned = (value: string) =>
    Temporal.PlainDateTime.from(value.length === 16 ? value + ':00' : value).toZonedDateTime(
      Temporal.Now.timeZoneId(),
    );

  const sxEvents = useMemo(
    () =>
      events.map((e) => ({
        id: e.id,
        title: `Trainer ${e.title} • ${e.description}`,
        location: `Studio ${e.location}`,
        start: toZoned(e.start),
        end: toZoned(e.end),
      })),
    [events],
  );

  const calendar = useCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid()],
    dayBoundaries: {
      start: '06:00',
      end: '10:00',
    },

    plugins: [eventsService],

    callbacks: {
      onEventClick(event) {
        console.log(event);
      },
    },
  });

  useEffect(() => {
    eventsService.set(sxEvents);
  }, [sxEvents, eventsService]);

  return (
    <div>
      <div>
        <h3>Filters</h3>
      </div>
      <div>
        <ScheduleXCalendar calendarApp={calendar} />;
      </div>
    </div>
  );
}
