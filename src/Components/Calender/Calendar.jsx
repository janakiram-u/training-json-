import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const generateCalendar = () => {
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    const daysInMonth = getDaysInMonth(currentMonth.getMonth(), currentMonth.getFullYear());

    const startingDay = firstDayOfMonth.getDay();

    const calendar = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < startingDay) || day > daysInMonth) {
          week.push(null);
        } else {
          week.push(day);
          day++;
        }
      }
      calendar.push(week);
    }

    return calendar;
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const calendar = generateCalendar();

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Calendar</h2>
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <Button variant="outline-primary" onClick={prevMonth}>&lt;</Button>
            <h5 className="mb-0">{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</h5>
            <Button variant="outline-primary" onClick={nextMonth}>&gt;</Button>
          </div>

          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                {daysOfWeek.map((day) => (
                  <th key={day} scope="col">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {calendar.map((week, index) => (
                <tr key={index}>
                  {week.map((day, i) => (
                    <td key={i}>{day !== null ? day : ''}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Calendar;
