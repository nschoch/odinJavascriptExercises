let ageCalc = (birthYear, deathYear) => {
    if (!deathYear) {
        deathYear = (new Date).getFullYear();
    }
    return deathYear*1 - birthYear*1
}

let findTheOldest = (arrayOfPeeps) => {
    let oldest = {};
    arrayOfPeeps.forEach((person) => {
        let age = ageCalc(person.yearOfBirth, person.yearOfDeath);
        let oldestAge = ageCalc(oldest.yearOfBirth, oldest.yearOfDeath);
        if (age > oldestAge || !oldestAge) {
            oldest = person;
        }
    })

    return oldest
}

module.exports = findTheOldest
