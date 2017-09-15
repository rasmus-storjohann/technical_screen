class Model
{
    constructor(data)
    {
        this.data = data;
    }

    getFilteredByName(searchTerm)
    {
        let matchesSearchTerm = centre => 
        {
            return !searchTerm || centre.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        };

        return this.data.filter(matchesSearchTerm);
    }
}

export default Model;
