// Code your solution here
const findMatching = (driverName, argument) => {
    return driverName.filter(name => {
        if(name.includes(argument)) {
            return name
        } else if(name.includes(argument.toLowerCase())) {
            return name
        }
    })
}
const fuzzyMatch = (drivers, argument) => {
    return drivers.filter(name => {
        if(name[0] === argument[0] && name[1] === argument[1]) {
            return name
        }
    })
}
const matchName = (drivers, argument) => {
    drivers.filter((driverName) => {
        if(driverName.name === argument) return driverName
    })
    
}
