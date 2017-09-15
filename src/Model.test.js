import MapLocation from './businessInterfaces/MapLocation';
import CommunityCentre from './businessInterfaces/CommunityCentre';
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

    it('includes everthing if matching string is empty', () => {
      let filteredList = model.getFilteredByName('');
      expect(filteredList).to.have.lengthOf(1);
    });

    it('includes everthing if matching string is null', () => {
      let filteredList = model.getFilteredByName();
      expect(filteredList).to.have.lengthOf(1);
    });

    it('includes centre with matching name', () => {
      let filteredList = model.getFilteredByName('First');
      expect(filteredList).to.have.lengthOf(1);
      expect(filteredList[0].name).to.eq('First Community Centre');
    });

    it('matches are case insensitive', () => {
      let filteredList = model.getFilteredByName('first');
      expect(filteredList).to.have.lengthOf(1);
      expect(filteredList[0].name).to.eq('First Community Centre');
    });

    it('excludes centre with non-matching name', () => {
      let filteredList = model.getFilteredByName('Second');
      expect(filteredList).to.be.empty;
    });
  });
});
