function buyTicket(flightName, buyTime, fullName, type = 0) {
  /**
   * @type {Flight}
   */
  const flight = flights[flightName];

  if (!flight)
    throw new Error('Flight not found');

  if (flight.tickets.length >= flight.seats)
    throw new Error('No seats available');

  if (buyTime > flight.registartionEnds)
    throw new Error('Time away');

  const seat = findAvailableSeat(flight, type);

  if (!seat)
    throw new Error(`No seats of type ${type} available. You can choose another type`);

  let id, exists;
  
  do {
    id = flight.name + '-' + (flight.tickets.length + 1); // Math.random().toString().substr(2, 3);
    exists = flight.tickets.find(item => item.id === id);
  } while (exists);

  /**
   * @type {Ticket}
   */
  const ticket = {
    id,
    flight: flight.name,
    buyTime,
    fullName,
    registrationTime: null,
    type,
    seat,
  };

  flight.tickets.push(ticket);

  return {...ticket}; 
}