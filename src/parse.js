import CommunityCentre from './CommunityCentre';
import MapLocation from './MapLocation';
let parseCvsSynchronously = require('csv-parse/lib/sync');

var createLocation = row => 
{
    return new MapLocation(row[1], row[2]);
};

var createCommunityCentre = row =>
{
    return new CommunityCentre(row[0], row[3], row[4], createLocation(row));
};

var parse = input =>
{
    return parseCvsSynchronously(input)
        .filter(row => row[0] !== 'CENTRE_NAME')
        .map(createCommunityCentre);
}

export default parse;
