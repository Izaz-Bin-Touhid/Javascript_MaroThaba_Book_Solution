//Practice Problem 01
const buyingPrice= 4500;
if(buyingPrice>6000){
    const payablePrice = 6000-((6000/100)*15)
    console.log(payablePrice);
}
else if(buyingPrice >3000){
    const payablePrice = 3000-((3000/100)*5)
    console.log(payablePrice);
}

//Practice Problem 02
const age = 34;
if(age>60){
    console.log("50% discount")
}
else if(age<12){
    console.log("Free")
}
else{
    console.log("Pay full bill")
}

//Practice Problem 03
const balance = 2000;
if(balance<1000){
    console.log("Diposit")
}
else if(1000<balance<5000){
    console.log("Enjoy")
}
else{
    console.log("Boroloxx")
}

//Practice Problem 04
const mark = 68;

if(mark<50){
    console.log("Fail")
}
else if(50<mark<80){
    console.log("Pass")
}
else{
    console.log("A+")
}

//Practice Problem 05
const pageCount = 401;
if(pageCount<100){
    console.log("Small Book")
}
else if(100<pageCount<500){
    console.log("Mid Size book")
}

else{
    console.log("Heart attack book")
}

//Practice Problem 06
const temp = 43;

if(temp<0){
    console.log("Ice")
}
else if(0<temp<20){
    console.log("Cool Cool");
}

else if(20>temp){
    console.log("Hot Hot")
}

//Practice Problem 07
const level = 12;
if(level <10){
    console.log("novice")
}
else if(10<level<50){
    console.log("Expert")
}
else{
    console.log("Pro gamer")
}

