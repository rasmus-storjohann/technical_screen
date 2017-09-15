class MapLocation
{
    constructor(latitude, longitude)
    {
        this.latitude = this.validateNumber(latitude, 'Latitude');
        this.longitude = this.validateNumber(longitude, 'Longitude');
    }

    validateNumber(value, description)
    {
        if (!this.isValidNumber(value))
        {
            throw new Error(description + ' is not a number: ' + value);
        }

        return value;
    }

    isValidNumber(value)
    {
        // this is a little too restrictive, will reject '.3' and '3.' Also, I would
        // normally put a number of unit tests around a regex of this complexity, did not
        // have time.
        return /^[-\+]?\d+(\.\d+)?$/.exec(value);
    }
}

export default MapLocation;
