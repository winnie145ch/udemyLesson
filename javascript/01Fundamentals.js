//Switch case
const language = 'Taiwanese';
switch (language) {
  case 'Chinese':
  case 'Mandarin':
    console.log("MOST number of native speakers!");
    break;
  case 'Spanish':
    console.log("2nd place in number of native speakers");
    break;
  case 'English':
    console.log("3rd place");
    break;
  case 'Hindi':
    console.log("Number 4");
    break;
  case 'Arabic':
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too ╰(*°▽°*)╯");
}

//conditional ternary operator
const population = 23;
console.log(`Taiwan's population is ${population >= 33 ? 'above' : 'below' } average`);
