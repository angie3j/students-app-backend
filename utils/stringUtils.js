
// Write a function that takes a string and number called n, and 
// repeats the string n lines with a space in the middle of each time.
// Example of functions we can create to format names, numbers, comments
// shipping, discounts, buy one get one free. Let's learn how to 
// create a function in one file and pass it over to other files.


function repeatNTimesWithSpace(string, n){
    if(!string) return '';
    const arr = new Array(n).fill(string);

    return arr.join(' ');
};

function capitalizeFirstLetter(string){
    if(!string) return '';
    return string[0].toUpperCase() + string.slice(1);
}

module.exports = {repeatNTimesWithSpace,capitalizeFirstLetter
};

