// function makeTime(hours, minutes) {
//     const date = new Date();
//     date.setHours(hours);
//     date.setMinutes(minutes);
//     date.setSeconds(0);
//     date.setMilliseconds(0);
//     return date.getTime();
// }

/**
 * @type {Object<string, Flight>} Список всех рейсов
 */
// let flights = {
//     BH118: {
//         name: 'BH118',
//         seats: 28,
//         businessSeats: 4,
//         registrationStarts: makeTime(-2, 0),
//         registartionEnds: makeTime(3, 0),
//         tickets: [
//             {
//                 id: 'BH118-B50',
//                 flight: 'BH118',
//                 fullName: 'Ivanov I. I.',
//                 type: 0,
//                 seat: 18,
//                 buyTime: makeTime(2, 0),
//                 registrationTime: null,
//             }
//         ],
//     }
// };

/**
 * Функция пробует произвести электронную регистрацию пассажира
 * 
 *  * проверка билета
 *  * проверка данных пассажира
 *  * электронную регистрацию можно произвести только в период от 5 до 1 часа до полета
 * 
 * @param {string} ticketId номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns boolean успешна ли регистрация
 */

function eRegistration(ticketId, fullName, nowTime) {
	try {
		if (!ticketId)
			throw new Error('Ticket id is required.');

		const flightName = ticketId.split('-')[0];
		const flight = flights[flightName];

		if (!flight)
			throw new Error('Flight was not found.');

		if (flight.registrationStarts > nowTime)
			throw new Error('Registration to flight has not started yet.');

		if (flight.registartionEnds <= nowTime)
			throw new Error('Registration to flight was over.');

		if (!fullName)
			throw new Error('Full name is required.');

		const ticket = flight.tickets.find(ticket => ticket.id === ticketId);

		if (!ticket)
			throw new Error('Ticket id is invalid.');

		if (ticket.fullName !== fullName)
			throw new Error('Full name is invalid.');


		ticket.registrationTime = nowTime;

		return true; 
	} catch (e) {
		console.log(e.message);
		return false;
	}
}

eRegistration("BH118-B50", "Ivanov I. I.", new Date().getTime());
