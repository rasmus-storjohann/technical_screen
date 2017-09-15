import React, { Component } from 'react';
import './App.css';
import createModel from './createModel';
import FilterForm from './FilterForm';

class App extends Component
{
  constructor()
  {
    super();
    this.model = createModel();
  }

  getFilteredCommunityCentres()
  {
    return this.model.getFilteredByName('');
  }

  render()
  {
    let rows = this.getFilteredCommunityCentres().map(centre =>
    {
      return <CommunityCentreRow key={centre.name} data={centre} />
    });
    return (
      <div>
        <FilterForm/>
        <table><tbody>{rows}</tbody></table>
      </div>
    )
  }
}

const CommunityCentreRow = (props) => {
  return (
    <tr>
      <td>{ props.data.name }</td>
      <td>{ props.data.url }</td>
    </tr>
  );
}

export default App;
