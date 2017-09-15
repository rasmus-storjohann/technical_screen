import React, { Component } from 'react';
import createModel from '../businessObjects/createModel';
import CommunityCentreListItem from './CommunityCentreListItem';

class CommunityCentreListControl extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
       model: createModel(),
       filteredItems: []
     };
  }

  filterList(event)
  {
    var searchTerm = event.target.value;

    var filteredItems = this.state.model.getFilteredByName(searchTerm);

    this.setState({filteredItems: filteredItems});
  }

  componentWillMount()
  {
    this.setState({filteredItems: this.state.model.getFilteredByName()})
  }

  render()
  {
    return (
      <div>
        <input type="text" placeholder="Search" onChange={this.filterList}/>
        <CommunityCentreListItem items={this.state.filteredItems}/>
      </div>
    );
  }
}

export default CommunityCentreListControl;
