class Model
{
    constructor(data)
    {
        this.data = data;
    }

    getFilteredByName(searchTerm)
    {
        let matchesSearchTerm = centre => !searchTerm || centre.name.indexOf(searchTerm) !== -1;

        return this.data.filter(matchesSearchTerm);
    }
}

export default Model;
