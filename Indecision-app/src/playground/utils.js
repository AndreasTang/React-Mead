const isAdult = (age) => {
    return age >= 18
}

const canDrink = (age) => {
    return age >= 20
}

const isSenior = (age) => {
    return age >= 70 
}

export { isAdult, canDrink, isSenior as default }