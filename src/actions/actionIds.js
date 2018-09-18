const actionIds = [
    'ADD_CHARACTER',
    'REMOVE_CHARACTER',
    'EDIT_CHARACTER',
    'COMPLETE_CHARACTER'
].reduce((actionIds, id)=>{
    actionIds[id] = id
    return actionIds
}, {});

// export ids as an object where id='id'
export default actionIds;
