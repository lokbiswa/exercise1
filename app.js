
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


    function arrayFromRange(min, max){
        const output = [];
        for( i = min; i <= max; i++){
            output.push(i);
        }
        return output;
    }

    const numbers = [12,0,2,3,15,9,0];

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
const movies =[
    {title:'a', year:2018, rating:4.5},
    {title:'b', year:2018, rating:4.7},
    {title:'c', year:2018, rating:3},
    {title:'d', year:2017, rating:4.5},
]

const titles = movies
    .filter(m => (m.year === 2018) && (m.rating>= 4))
    .sort((a, b)=> b.rating - a.rating)
    .map(m => m.title);
console.log(titles)