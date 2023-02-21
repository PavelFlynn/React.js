/*
* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::
* Convert string to Uppercase
*/

function sayLouder(string) 
{
    return string.toUpperCase();
}

console.log('It works!'); 
//-> IT WORKS!


/*
* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::
* Array Filter : get grades > 20
*/

const grades = [10, 2, 21, 35, 50, -10, 0, 1];
const r = grades.filter(grade => grade > 20);
//-> [21, 35, 50]

/*
* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::
* Array Filter : get numbers > 0
*/
function getPositiveNumbers(numbers) 
{
    return numbers.filter(number => number > 0);
}

console.log(getPositiveNumbers([10, -5, 2, -4]));
//-> [10, 2]

/*
* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::
* Array Filter : get passing grade >= 10

    const data = [{
        id: 1,
        grade: 10
    }, {
        id: 2,
        grade: 4
    }, {
        id: 3,
        grade: 18
    }]

*/
function getPassingTests(grades) 
{
    return grades.filter(grade => grade.grade >= 10);
}

console.log(getPassingTests(data)); 
//-> [{"id":1,"grade":10}, {"id":3,"grade":18}]
