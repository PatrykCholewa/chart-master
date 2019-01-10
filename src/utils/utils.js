export const deepCopyObject = obj => JSON.parse(JSON.stringify(obj));

export const deepCopyArray = arr => arr.map( obj => deepCopyObject(obj) );

export const isPointValid = point => point !== undefined && !isNaN(point.x) && !isNaN(point.y);

export const isPointRenderable = point => isPointValid(point) && point.x.length > 0 && point.y.length > 0;