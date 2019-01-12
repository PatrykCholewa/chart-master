export const deepCopyObject = obj => JSON.parse(JSON.stringify(obj));

export const deepCopyArray = arr => arr.map( obj => deepCopyObject(obj) );

export const isPointValid = point => point !== undefined && !isNaN(point.x) && !isNaN(point.y);

export const isPointRenderable = point => isPointValid(point) && point.x.length > 0 && point.y.length > 0;

export const getRenderableDataForDataSets = dataSets => {
    let xAxisDict = {};

    dataSets.forEach( (set, index) => {
        getRenderableDataForSet(set).forEach( point => {
            let xPoints = xAxisDict[point.x] === undefined ? {} : xAxisDict[point.x];

            xPoints[index] = point.y;
            xAxisDict[point.x] = xPoints;
        })
    });

    return Object.keys(xAxisDict).map((x) => ({x, ...xAxisDict[x]}));
};

export const getRenderableNumberDataForSet = set =>
    getRenderableDataForSet(set).map( point => ({
        x: Number(point.x),
        y: Number(point.y)
    }));

export const getRenderableDataForSet = set => {
    const d = set.data
      .filter( point => isPointRenderable(point))
      .sort( (p1, p2) => p1.x > p2.x );
    console.log(d);
    return d;
};
