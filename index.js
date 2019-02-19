let currentTicket = 1

function takeANumber(currentLine){
  //var newTicketNumber = ticketNumber + 1;
  
  currentLine.push(currentTicket);
  let outputString = `Welcome, ${currentTicket}. You are number ${currentLine.length} in line.`;
  currentTicket ++;
  retrun outputString;
  
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length){
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine){
  var i = '';
  var customer = '';
  var comma = '';
  
  function addComma(i){
    if(i < katzDeliLine.length -1){
      comma = ', ';
      return comma;
    } else {
      return '';
    }
  }
  
  
  if(katzDeliLine.length){
    for (i = 0; i < katzDeliLine.length; i++){
      customer += `${i +1}. ${katzDeliLine[i]}${addComma(i)}`;
    }
    return `The line is currently: ${customer}`;
  } else {
    return 'The line is currently empty.';
  }
}