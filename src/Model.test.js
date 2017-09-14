import MapLocation from './MapLocation';
import CommunityCentre from './CommunityCentre';
import Model from './Model';
let expect = require('chai').expect;

describe('The model', () => {

  let mapLocation = new MapLocation('123', '456');
  let communityCentre = new CommunityCentre('First Community Centre', 'address', 'url', mapLocation);

  it('can construct', () => {
    let model = new Model([communityCentre]);
    expect(model.data[0].name).to.eq('First Community Centre');
  });

  describe('filter by name', () => {
    let model = new Model([communityCentre]);

    it('includes centre with matching name', () => {
      let filteredList = model.getFilteredByName('First');
      expect(filteredList).to.have.lengthOf(1);
      expect(filteredList[0].name).to.eq('First Community Centre');
    });

    it('excludes centre with non-matching name', () => {
      let filteredList = model.getFilteredByName('Second');
      expect(filteredList).to.be.empty;
    });
  });
});
