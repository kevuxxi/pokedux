export const logger = store => next => action => {
    console.log('dispatching action', action)
    return next(action)
}

export const featuring = store => next => action => {

    const featured = [{ name: 'mochi' }, ...action.action.payload];

    const updateaction = { ...action, action: { ...action.action, payload: featured } }

    next(updateaction)
}

