export const deepCopyObject = obj => JSON.parse(JSON.stringify(obj));

export const deepCopyArray = arr => arr.map( obj => deepCopyObject(obj) );