const weaponsList = [
    {
        damage: 6,
        name: 'Hand Axe',
        price: 400, //copper pieces
        range: 1,
        size: 1, // 1 = Small, 2 = Medium, 3 = Large
        weight: 5 //pounds
    },
    {
        damage: 8,
        name: 'Battle Axe',
        price: 700, 
        range: 1,
        size: 2,
        weight: 7
    },
    {
        damage: 10,
        name: 'Great Axe',
        price: 1400, 
        range: 1,
        size: 3,
        weight: 10
    },
    {
        damage: 10,
        name: 'Shortbow',
        price: 2500, 
        range: [70, 140, 210],
        size: 2,
        weight: 2
    }
]

const weaponsArray = weaponsList.reduce((weapons, currentWeapon, index) => {
    currentWeapon.id = index;
    weapons[index] = currentWeapon;
    return weapons;
}, []);

export default weaponsArray;

// const sampleWeapon = {
//     id: 0000,
//     price: 1000, //copper pieces
//     weight: 5, //pounds
//     name: 'hand axe',
//     size: 1, // 1 = Small, 2 = Medium, 3 = Large
//     damage: 6
// }