import MapLocation from './MapLocation';
import CommunityCentre from './CommunityCentre';
import Model from './Model';
let expect = require('chai').expect;

describe('The model', () => {
  let mapLocation = new MapLocation('123', '456');
  let communityCentre = new CommunityCentre('name', 'address', 'url', mapLocation);

  it('can construct', () => {
    let model = new Model([communityCentre]);
    expect(model.data[0].name).to.eq('name');
  });
});
