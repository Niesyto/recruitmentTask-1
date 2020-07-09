const initialState = {
    items: []
}

export const cartContent = (state = initialState, action) => {
    switch (action.type) {
        case 'ITEMS_CHANGED':
            //This should be changed, this way it only works with a single item
            return Object.assign({}, state, {
                items: state.items.concat(action.items)
            });
        default:
            return state
    }
}

