// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, string) {
    let matching = array.filter((names) => names.toLowerCase() === string.toLowerCase() )
    return matching
}

function fuzzyMatch(array, string) {
    let matchUp = array.filter((element) => (element[0] + element[1]).toLowerCase() === (string[0] + string[1]).toLowerCase() )
    return matchUp
}

function matchName(array, string) {
    let matching = array.filter((element) => element.name.toLowerCase() === string.toLowerCase())
    return matching
}