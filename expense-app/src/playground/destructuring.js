const ship = {
    name: 'Nerine',
    class: 'Princess',
    speed: '38 knts',
    arment: {
        main: '356mm',
        secondary: '105mm',
        AAgun: '20mm'
    }
}

const { name:shipName, speed: shipSpeed, target = 'chrispy' } = ship

const { main: mainGun } = ship.arment

console.log(`${shipName} fire her ${mainGun} main gun hitting her enemy ${target} when sailing at ${shipSpeed}`)

const fleet = ['Task Force 101', 'Andreas', 'Nerine', 'Kogumi', 'Sonia']

const [fleetName, leader, , flagShip, screenShip] = fleet

console.log(`${fleetName} is lead by Commander ${leader} in ${flagShip} with ${screenShip}`)

const enemyShip = {
    name: 'Chrispy',
    class: 'Empire',
    speed: '25 knts',
    arment: {
        main: '303mm',
        secondary: '127mm',
        AAgun: '18mm'
    }
}

const { name: enemyship, speed: enemyShipSpeed, target = 'Nerine' } = enemyShip

const { main: enemyShipMainGun } = enemyShip.arment

console.log(`${enemyship} fire her ${enemyShipMainGun} at ${target} when sailing at ${enemyShipSpeed}`)