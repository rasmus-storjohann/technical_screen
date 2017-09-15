import CommunityCentre from '../businessInterfaces/CommunityCentre';
import MapLocation from '../businessInterfaces/MapLocation';
let parseCvsSynchronously = require('csv-parse/lib/sync');

var parse = input =>
{
    return parseCvsSynchronously(input)
        .filter(row => row[0] !== 'CENTRE_NAME')
        .map(createCommunityCentre);
}

var createCommunityCentre = row =>
{
    validate(row);

    return new CommunityCentre(row[0], row[3], row[4], createLocation(row));
};

var validate = row =>
{
    if (row.length !== 5)
    {
        throw new Error('Invalid data: 5 fields expected, got ' + row.length);
    }
}

var createLocation = row =>
{
    return new MapLocation(row[1], row[2]);
};

export default parse;
