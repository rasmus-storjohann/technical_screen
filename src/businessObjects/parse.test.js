import parse from './parse';
let expect = require('chai').expect;

describe('The parser function', () => {
  let parsedData = parse('Britannia,49.2756,-123.0738,1661 Napier St,http://vancouver.ca/parks/cc/britannia/index.htm');

  it('leaves out the header line', () => {
    let data = 'CENTRE_NAME,LATITUDE,LONGITUDE,ADDRESS,URLLINK\n' +
               'Britannia,49.2756,-123.0738,1661 Napier St,http://vancouver.ca/parks/cc/britannia/index.htm'
    expect(parse(data)).to.have.lengthOf(1);
  });

  it('can parse one line', () => {
    expect(parsedData).to.have.lengthOf(1);
  });

  it('can parse two lines', () => {
    let data = 'name1,1,2,address1,http://url1.ca\n' +
               'name2,3,4,address2,http://url2.ca'

    expect(parse(data)).to.have.lengthOf(2);
  });

  it('can extract community centre name', () => {
    expect(parsedData[0].name).to.eq('Britannia');
  });

  it('can extract community centre address', () => {
    expect(parsedData[0].address).to.eq('1661 Napier St');
  });

  it('can extract community centre URL with http', () => {
    let parsedData = parse('Britannia,49.2756,-123.0738,1661 Napier St,http://vancouver.ca/parks/cc/britannia/index.htm');

    expect(parsedData[0].url).to.eq('http://vancouver.ca/parks/cc/britannia/index.htm');
  });

  it('can extract community centre URL with https', () => {
    let parsedData = parse('Britannia,49.2756,-123.0738,1661 Napier St,https://vancouver.ca/parks/cc/britannia/index.htm');

    expect(parsedData[0].url).to.eq('https://vancouver.ca/parks/cc/britannia/index.htm');
  });

  it('can extract community centre latitude', () => {
    expect(parsedData[0].location.latitude).to.eq('49.2756');
  });

  it('can extract community centre longitude', () => {
    expect(parsedData[0].location.longitude).to.eq('-123.0738');
  });

  describe('data validation', () => {

    it('throws on missing field', () => {
      let dataWithMissingField = 'Britannia,-123.0738,1661 Napier St,http://vancouver.ca/parks/cc/britannia/index.htm';

      expect(() => parse(dataWithMissingField)).to.throw(Error, /5 fields expected, got 4/);
    });

    it('throws on additional field', () => {
      let dataWithExtraField = 'Britannia,extraField,49.2756,-123.0738,1661 Napier St,http://vancouver.ca/parks/cc/britannia/index.htm';

      expect(() => parse(dataWithExtraField)).to.throw(Error, /5 fields expected, got 6/);
    });

    it('throws last field not being an http or https url', () => {
      let dataWithInvalidUrl = 'Britannia,49.2756,-123.0738,1661 Napier St,ftp://vancouver.ca/parks/cc/britannia/index.htm';

      expect(() => parse(dataWithInvalidUrl)).to.throw(Error, /Invalid url/);
    });

    it('throws on latitude not being a number', () => {
      let dataWithInvalidLatitude = 'Britannia,X49.2756,-123.0738,1661 Napier St,http://vancouver.ca/parks/cc/britannia/index.htm';

      expect(() => parse(dataWithInvalidLatitude)).to.throw(Error, /Latitude is not a number/);
    });

    it('throws on longitude not being a number', () => {
      let dataWithInvalidLongitude = 'Britannia,49.2756,X123.0738,1661 Napier St,http://vancouver.ca/parks/cc/britannia/index.htm';

      expect(() => parse(dataWithInvalidLongitude)).to.throw(Error, /Longitude is not a number/);
    });
  });
});
