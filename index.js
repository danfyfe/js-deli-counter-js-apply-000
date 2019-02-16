function takeANumber(currentLine, newCustomer){
  currentLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${currentLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length){
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  var customer = "";
  var comma = ", ";
  var i;
  if (katzDeliLine.length){
    for (i = 0; i < katzDeliLine.length; i++){
      while (i < katzDeliLine.length-1)
        comma = "";
        
      customer += `${i + 1}. ${katzDeliLine[i]}${comma}`}
      return `The line is currently: ${customer}`;
    } 
    else {
      return "The line is currently empty.";
    }
  }

  