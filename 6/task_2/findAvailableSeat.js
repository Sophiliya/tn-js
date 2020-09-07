function findAvailableSeat(flight, type) {
  let exists;
  let seat;
  let seatsOfType = 0;

  switch (type) {
    case 0: // standart
      const availableSeats = [];

      for (let i = flight.businessSeats + 1; i <= flight.seats; i++)
        if (!flight.tickets.find(item => item.seat === i))
          availableSeats.push(i);

      if (availableSeats.length === 0)
        return null;

      const index = Math.floor(Math.random() * availableSeats.length);
      return availableSeats[index];
    case 1: // business
      for (let i = 1; i <= flight.businessSeats; i++)
        if (!flight.tickets.find(item => item.seat === i))
          seatsOfType++;

      if (seatsOfType === 0)
        return null;

      do {
        seat = Math.floor(Math.random() * flight.businessSeats) + 1;
        exists = flight.tickets.find(item => item.seat === seat);
      } while (exists);

      return seat;
    default:
      throw new Error(`Unknown type`);
  }
}