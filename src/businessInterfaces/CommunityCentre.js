class CommunityCentre
{
    constructor(name, address, url, location)
    {
        this.name = name;
        this.address = address;
        this.url = this.validateUrl(url);
        this.location = location;
    }

    validateUrl(url)
    {
        if (!/^https?:/.exec(url))
        {
            throw new Error('Invalid url: ' + url);
        }
        return url;
    }
}

export default CommunityCentre;
