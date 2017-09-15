import React, { Component } from 'react';
import createModel from '../businessObjects/createModel';
import CommunityCentreListItem from './CommunityCentreListItem';

var CommunityCentreListControl = React.createClass(
{
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

export default CommunityCentreListControl;
