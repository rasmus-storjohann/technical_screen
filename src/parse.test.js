import parse from './parse';
let expect = require('chai').expect;

describe('The parser function', () => {
  let parsedData = parse('Britannia,49.2756,-123.0738,1661 Napier St,http://vancouver.ca/parks/cc/britannia/index.htm');

  it('can parse one line', () => {
    expect(parsedData.length).to.eq(1);
  });

  it('can extract community centre name', () => {
    expect(parsedData[0].name).to.eq('Britannia');
  });

  it('can extract community centre address', () => {
    expect(parsedData[0].address).to.eq('1661 Napier St');
  });

  it('can extract community centre URL', () => {
    expect(parsedData[0].url).to.eq('http://vancouver.ca/parks/cc/britannia/index.htm');
  });

  it('can extract community centre latitude', () => {
    expect(parsedData[0].location.latitude).to.eq('49.2756');
  });

  it('can extract community centre longitude', () => {
    expect(parsedData[0].location.longitude).to.eq('-123.0738');
  });
});
