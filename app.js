


// function showStars(count){
//     let stars = '';
//     for (i = 1; i<= count; i++){
//         stars += '*';
//         console.log(stars);
//     }
// }


// showStars(10)

showPrime(1000000)
function showPrime(limit){
    let primeNum = []
    for(num = 2; num <= limit; num++ ){
        let isPrime = true;
        for(fact = 2; fact < num; fact++){
            if(num%fact === 0){                
                isPrime = false
            }
        }
        if(isPrime){
            // console.log(num)
            primeNum.push(num);
        }
    }
    console.log(primeNum.length)
 }
















// const numbers = [1, -2 , 1, 2, 3]

// const filtered = numbers.filter(function(value){
//     return value >= 0;
// });
//  console.log(filtered)

// //  mao method

// // construct some HTML markup using the array
// const item = filtered.map(n => `<li> ${n} <li/>`)
// console.log(item)
// const html = `<ul> ${item.join(' ')} <ul`;
// console.log(html)
//  array from range 


// function arrayFromRange(min, max){
//     const output = [];
//     for( i = min; i <= max; i++){
//         output.push(i);
//     }
//     return output;
// }

// const numbers = arrayFromRange(1,5);

// function includes(array, searchElement){
//     return numbers.includes(searchElement);
// }
// console.log(numbers)
// const isInNumber = includes(numbers, 22);
// console.log(isInNumber);

// function except(array , excluded){
//     const output = array.filter(function(n) {
//         if (!excluded.includes(n))
//             return n;
//     });
//     return output; 
// }
// const output = except(numbers, [-2, -1, 0]) 
// console.log(numbers)
// console.log(output)
// function getMax(array){
//     if (array.length === 0) return undefined;

//     return numbers.reduce((accumulator, currentValue) => (accumulator > currentValue)? accumulator : currentValue
//     );
// }
// max = getMax([12,0,2,3,15,9,0]);
// console.log(max)
// const movies =[
//     {title:'a', year:2018, rating:4.5},
//     {title:'b', year:2018, rating:4.7},
//     {title:'c', year:2018, rating:3},
//     {title:'d', year:2017, rating:4.5},
// ]

// const titles = movies
//     .filter(m => (m.year === 2018) && (m.rating>= 4))
//     .sort((a, b)=> b.rating - a.rating)
//     .map(m => m.title);
// console.log(titles)

// function sum(){
//     if(Array.isArray(arguments[0]))
//         return arguments[0].reduce(
//             (accumulator, currentValue)=> accumulator + currentValue);
//     array = Array.from(arguments);
//     return array.reduce(
//         (accumulator, currentValue) => accumulator + currentValue);
// }

// let output = sum(1,2,3,5,4,6);
// console.log(output)
// try{ 
//     const count = countOccurrences([1,2,5,1,6,2,54,55], );
//     console.log(count);
// }
// catch(e){
//     console.log(e);
// }




// function countOccurrences(array, searchElement){
//     if(Array.isArray(array))
//         return array.reduce(
//             (accumulator, currentValue )=> {
//                 const occurrence = (currentValue === searchElement)? 1 : 0;
//                 return accumulator + occurrence;
//             },0);
// throw new Error("The First Argument most be a array");
// }