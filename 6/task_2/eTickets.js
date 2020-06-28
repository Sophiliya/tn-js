const eTicketForm = document.getElementById("e-ticket-form");

eTicketForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const flightName = form.elements['flightName'].value;
  const fullName   = form.elements['fullName'].value;
  const type       = parseInt(form.elements['type'].value);
  const buyTime    = new Date().getTime();

  try {
    const result = buyTicket(flightName, buyTime, fullName, type);
    const { id, seat } = result;

    const resultBlock = document.getElementById('result-block');
    let p = document.createElement('p');

    p.innerText = `Your Ticket details: \n ID: ${id}\n TYPE: ${type}\n SEAT NUMBER: ${seat}`;
    resultBlock.append(p);

    form.reset();
  } catch(e) {
    alert(e.message);
  }  
});