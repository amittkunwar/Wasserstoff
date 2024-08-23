import React, { useEffect, useState } from 'react';

const TimeAndLocation = ({ weather }) => {
  const { timezone, name, country } = weather;

  const [formattedLocalTime, setFormattedLocalTime] = useState('');

  useEffect(() => {
    if (timezone !== undefined) {
      // Get the current UTC time
      const utcTime = new Date().getTime() + new Date().getTimezoneOffset() * 60000;

      // Adjust UTC time with the timezone offset from the API
      const localTime = new Date(utcTime + timezone * 1000);

      // Format the local time to display day, date, and time
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // Optional: to show time in 12-hour format with AM/PM
      };

      setFormattedLocalTime(
        new Intl.DateTimeFormat('en-US', options).format(localTime)
      );
    }
  }, [timezone]);

  return (
    <div>
      <div className="flex items-center justify-center">
        {formattedLocalTime && (
          <p className="text-white text-xl font-extralight">
            {formattedLocalTime}
          </p>
        )}
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;

