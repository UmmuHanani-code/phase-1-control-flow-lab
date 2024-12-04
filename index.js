let ride;
function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    return 'This one is on me!';
}
else if(ride > 400 && ride <= 2000) {
  return 'That will be twenty bucks.';
}
else if (ride > 2000 && ride <= 2500) {
  return 'I will gladly take your thirty bucks.';
}
else if(ride > 2500)
  return 'No can do.';
}
console.log(scuberGreetingForFeet(2600));

let isCity;

function ternaryCheckCity(isCity){

    return (isCity === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}
console.log(ternaryCheckCity('Pittsburgh'));

let myTips;
function switchOnCharmFromTip(myTips){
  switch(myTips) {
    case 'generous':
      return 'Thank you so much.';
      break;
      case 'not as generous':
        return 'Thank you.';
        break;
        default:
          return 'Bye.'
  }
}
console.log(switchOnCharmFromTip('generious'));
