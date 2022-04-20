"use strict";

function fruitProcessor(pears, peaches) {
  console.log(pears, peaches);
  const jam = `Jam with ${pears} pears anf ${peaches} peaches.`;
  return jam;
}

fruitProcessor(2, 5);

const newJam = fruitProcessor(2, 5);
console.log(newJam);

