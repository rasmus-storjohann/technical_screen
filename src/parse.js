import CommunityCentre from './CommunityCentre';
let synchronousCsvParse = require('csv-parse/lib/sync');

var parse = (input) =>
{
    var parsedLines = synchronousCsvParse(input);

    return parsedLines.map((row) => {
        return new CommunityCentre(row[0]);
    });
}

export default parse;
