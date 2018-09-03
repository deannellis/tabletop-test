export default [
    {
        id: '0000',
        level: 1,
        name: 'Charm Person',
        range: '30ft',
        type: 'magic-user',
        duration: 'special',
        shortDescription: 'This spell makes a humanoid creature regard the caster as its trusted friend and ally.',
        longDescription: 'This spell makes a humanoid creature of 4 hit dice or less regard the caster as its trusted friend and ally. And more...'
    },
    {
        id: '0001',
        level: 1,
        name: 'Detect Magic',
        range: '60ft',
        type: undefined,
        duration: '2 turns',
        shortDescription: 'The caster of this spell is able to detect magic objects or creatures.',
        longDescription: 'The caster of this spell is able to detect enchanted or enspelled objects or creatures within the given range by sight, seeing them surrounded by a pale glowing light. And more...'
    },
    {
        id: '0002',
        level: 1,
        name: 'Floating Disc',
        range: '10ft',
        type: 'magic-user',
        duration: '5 turns + 1/level',
        shortDescription: 'This spell creates an invisible plane of force for carrying loads.',
        longDescription: 'This spell creates an invisible, slightly concave circular plane of force for carrying loads. And more...'
    },
    {
        id: '0003',
        level: 1,
        name: 'Hold Portal',
        range: '100ft + 10ft/level',
        type: 'magic-user',
        duration: '1 round/level',
        shortDescription: 'This spell magically holds shut a portal (door, gate, window, etc)',
        longDescription: 'This spell magically holds shut a door, gate, window, or shutter of wood, metal, or stone. And more...'
    },
    {
        id: '0004',
        level: 1,
        name: 'Light',
        range: '120ft',
        type: undefined,
        duration: '6 turns + 1/level',
        shortDescription: 'This spell creates a light equal to torchlight',
        longDescription: 'This spell creates a light equal to torchlight which illuminates a 30ft radius area (and provides dim light for an additional 20) around the target location or object. And more...'
    },
    {
        id: '0005',
        level: 1,
        name: 'Cure Light Wounds',
        range: 'touch',
        type: 'cleric',
        duration: 'instantaneous',
        shortDescription: 'The caster heals 1d6+1 hit points of damage',
        longDescription: 'With this spell the caster heals 1d6+1 hit points of damage by laying his or her hand upon the injured creature.'
    }
]

// const sampleSpell = {
//     id: 0000,
//     level: 1,
//     name: 'Floating Disc',
//     range: '0',
//     type: 'magic-user',
//     duration: '5 turns + 1/level',
//     shortDescription: 'This spell creates an invisible, slightly concave circular plane of force for carrying loads.',
//     longDescription: 'This spell creates an invisible, slightly concave circular plane of force for carrying loads.'
// }