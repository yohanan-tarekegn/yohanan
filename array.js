const donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];
donuts.forEach(function(donut){
    console.log(donut.type+" donuts cost $"+donut.cost+" each");
})









/*
var facebookProfile={
    name: "yohanan",
    friends: 85,
    message: ["we are champions", "zaldrizes buzdari iksos daor", "dracarys"],
    postMessage: function(messge){
        facebookProfile.message.push(messge);
    },
    deleteMessage: function(index){
        facebookProfile.message.splice(index,1);
    },
    addfriend: function(){
        friends++;
    },
    removefriend: function(){
        friends--;
    }
}
console.log(facebookProfile.deleteMessage(0));
console.log(facebookProfile.message);

*/






/*
const grid = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid[i].length;j++){
        console.log(grid[i][j]);
    }
}

const umbrella = { 
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   },
  close: function() { 
    if (umbrella.isOpen === false) {
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false;
      return "Julia closes the umbrella!";
    }
   }
};
console.log(umbrella.open());
console.log(umbrella.open());
console.log(umbrella.close());

if(grid[i][j]%2==0)
        grid[i][j]="even";


const bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
const totals=bills.map(function(x){
    x=x+x*0.15;
    return (x.toFixed(2));
})
console.log(totals);
*/



/*
const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
test.forEach(function(x,i){
    if(x%3==0)
    test[i]=x+100;});
console.log(test);
*/