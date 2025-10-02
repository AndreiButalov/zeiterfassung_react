import React, { useState } from "react";
import Day from "../Day/Day";


const Calender = () => {
  const [viewDate, setViewDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const startOfWeek = (date) => {
    const day = (date.getDay() + 6) % 7;
    const copy = new Date(date);
    copy.setDate(date.getDate() - day);
    copy.setHours(0, 0, 0, 0);
    return copy;
  };

  const prevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const goToday = () => {
    const today = new Date();
    setViewDate(today);
    setSelectedDate(today);
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const renderDays = () => {
    const month = viewDate.getMonth();
    const start = startOfWeek(new Date(viewDate.getFullYear(), month, 1));
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const days = [];
    for (let i = 0; i < 42; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);

      let classes = "btn btn-light btn-sm";
      if (d.getMonth() !== month) classes += " text-muted";
      if (d.getTime() === today.getTime())
        classes = "btn btn-primary btn-sm text-white";
      if (selectedDate && d.toDateString() === selectedDate.toDateString())
        classes = "btn btn-warning btn-sm text-white";

      days.push(
        <button
          key={i}
          className={classes}
          onClick={() => handleDayClick(d)}
        >
          {d.getDate()}
        </button>
      );
    }
    return days;
  };

  const monthNames = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  return (
    <div className="card shadow rounded-4" style={{ width: "600px", minHeight: "360px" }}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="btn-group" role="group">
            <button className="btn btn-outline-secondary btn-sm" onClick={prevMonth}>
              ◀
            </button>
            <button className="btn btn-outline-secondary btn-sm" onClick={nextMonth}>
              ▶
            </button>
          </div>
          <h5 className="mb-0">
            {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
          </h5>
          <button className="btn btn-outline-primary btn-sm" onClick={goToday}>
            Heute
          </button>
        </div>

        <div
          className="d-grid"
          style={{ gridTemplateColumns: "repeat(7, 1fr)", marginTop: "40px" }}
        >
          <div className="text-center text-muted small">Mo</div>
          <div className="text-center text-muted small">Di</div>
          <div className="text-center text-muted small">Mi</div>
          <div className="text-center text-muted small">Do</div>
          <div className="text-center text-muted small">Fr</div>
          <div className="text-center text-muted small">Sa</div>
          <div className="text-center text-muted small">So</div>
        </div>

        <div className="d-grid gap-1 mt-2" style={{ gridTemplateColumns: "repeat(7, 1fr)" }}>
          {renderDays()}
        </div>
      </div>

      {/* Day Modal */}
      <Day date={selectedDate} show={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default Calender;
