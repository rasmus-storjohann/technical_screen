import CommunityCentre from './CommunityCentre';
import MapLocation from './MapLocation';
let synchronousCsvParse = require('csv-parse/lib/sync');

var parse = (input) =>
{
    var parsedLines = synchronousCsvParse(input);

    return parsedLines.map((row) => {
        let location = new MapLocation(row[1], row[2]);

        return new CommunityCentre(row[0], row[3], row[4], location);
    });
}

export default parse;
