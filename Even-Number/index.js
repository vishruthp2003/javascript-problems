/* A Program that Prints all the Even numbers in an array*/

const ages = [21,22,23,24,25,26,100];
const numberOfPeople = ages.length;

for (i=0;i<numberOfPeople;i++){
  if (ages[i] % 2 == 0){
    console.log(ages[i]);
  }
}