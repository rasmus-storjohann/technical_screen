import React, { Component } from 'react';
import createModel from './createModel';

var CommunityCentreListControl = React.createClass({
  filterList: function(event)
  {
    var searchTerm = event.target.value;

    var filteredItems = this.state.model.getFilteredByName(searchTerm);

    this.setState({filteredItems: filteredItems});
  },
  getInitialState: function()
  {
     return {
       model: createModel(),
       filteredItems: []
     }
  },
  componentWillMount: function()
  {
    this.setState({filteredItems: this.state.model.getFilteredByName()})
  },
  render: function()
  {
    return (
      <div>
        <input type="text" placeholder="Search" onChange={this.filterList}/>
        <CommunityCentreListItem items={this.state.filteredItems}/>
      </div>
    );
  }
});

class CommunityCentreListItem extends Component
{
  render()
  {
    let rows = this.props.items.map(centre => (
        <tr key={centre.name}>
          <td><a href={centre.url}>{centre.name}</a></td>
          <td>{centre.address}</td>
        </tr>
      )
    );

    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default CommunityCentreListControl;
