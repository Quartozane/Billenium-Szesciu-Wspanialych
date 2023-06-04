import React from 'react';
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    const { currentDate } = this.state;
    const { appointedDates } = this.props;

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
        calendarDays.push(null);
      }
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(year, month, i);
      calendarDays.push(date);
    }

    return (
      <div className="calendar w-25">
        <div className="header">
          <button className="btn btn-link" onClick={this.previousMonth}>
          <RxChevronLeft />
          </button>
          <span className='px-4 py-4'>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
          <button className="btn btn-link" onClick={this.nextMonth}>
          <RxChevronRight />
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              {daysInWeek.map(day => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>{this.renderWeeks(calendarDays, appointedDates)}</tbody>
        </table>
      </div>
    );
  }

  renderWeeks(calendarDays, appointedDates) {
    const weeks = [];
    const totalDays = calendarDays.length;
    let week = [];
    for (let i = 0; i < totalDays; i++) {
      const day = calendarDays[i];
      const isAppointed = appointedDates.includes(day?.toISOString().split('T')[0]);
      const isCurrentDate = day == null ? false : this.isSameDay(day, new Date());

      week.push(
        <td
          key={day || i}
          className={`${
            isAppointed ? 'bg-primary text-white' : ''
          } ${isCurrentDate ? 'bg-secondary text-white' : ''} ${
            day ? 'cursor-pointer' : ''
          }`}
          onClick={() => this.handleDayClick(day)}
        >
          {day ? day.getDate() : ''}
        </td>
      );

      if (i % 7 === 6 || i === totalDays - 1) {
        weeks.push(<tr key={weeks.length}>{week}</tr>);
        week = [];
      }
    }
    return weeks;
  }

  isSameDay(date1, date2) {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  previousMonth = () => {
    const { currentDate } = this.state;
    const prevMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    this.setState({ currentDate: prevMonthDate });
  };

  nextMonth = () => {
    const { currentDate } = this.state;
    const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    this.setState({ currentDate: nextMonthDate });
  };

  handleDayClick = day => {
    if (day) {
      console.log('Clicked day:', day.toISOString().split('T')[0]);
    }
  };
}

export default Calendar;