const makeTime = (hours, minutes) => {
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date.getTime();
}

let flights = {
  BH118: {
    name: "BH118",
    seats: 28,
    businessSeats: 4,
    registrationStarts: makeTime(-5, 0),
    registartionEnds: makeTime(23, 0),
    tickets: [
      {
        id: "BH118-B50",
        flight: "BH118",
        fullName: "Ivanov I. I.",
        type: 0,
        seat: 18,
        buyTime: makeTime(2, 0),
        registrationTime: null,
      },
      {
        id: 'BH118-B51',
        flight: 'BH118',
        fullName: 'Petrov I. I.',
        type: 1,
        seat: 25,
        buyTime: makeTime(2, 0),
        registrationTime: null,
    }
    ],
  },
};
