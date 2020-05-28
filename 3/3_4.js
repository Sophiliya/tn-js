/**
 * Отчет о рейсе на данный момент
 * 
 * @typedef {Object} Report
 * @property {string} flight Номер рейса
 * @property {boolean} registration Доступна регистрация на самолет
 * @property {boolean} complete Регистрация завершена или самолет улетел
 * @property {number} countOfSeats Общее количество мест
 * @property {number} reservedSeats Количество купленных (забронированных) мест
 * @property {number} registeredSeats Количество пассажиров, прошедших регистрацию
 */

 /**
 * Функция генерации отчета по рейсу
 * 
 *  * проверка рейса
 *  * подсчет
 * 
 * @param {string} flight номер рейса
 * @param {number} nowTime текущее время
 * @returns {Report} отчет
 */

function flightReport(flightName, nowTime) {
	try {
		const flight = flights[flightName];

		if (!flight)
			throw new Error('Flight was not found.');

		const registration = flight.registrationStarts <= nowTime && flight.registartionEnds > nowTime;
		const complete = flight.registartionEnds <= nowTime;
		const countOfSeats = flight.seats;
		const reservedSeats = flight.tickets.length;
		const registeredSeats = flight.tickets.filter(ticket => ticket.registrationTime !== null).length;

		let reports = {
			flight: flightName,
			registration,
			complete,
			countOfSeats,
			reservedSeats,
			registeredSeats
		};

		return reports;
	} catch (e) {
		return e.message;
	}
};

flightReport("BH118", new Date().getTime());