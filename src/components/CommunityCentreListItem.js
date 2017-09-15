import React, { Component } from 'react';

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

export default CommunityCentreListItem;
