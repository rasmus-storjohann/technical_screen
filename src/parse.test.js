import parse from './parse';
let expect = require('chai').expect;

describe('The parser function', () => {
  it('can parse one line', () => {
    let parsedData = parse('Britannia,49.2756,-123.0738,1661 Napier St,http://vancouver.ca/parks/cc/britannia/index.htm');
    expect(parsedData.length).to.eq(1);
  });
  it('can extract community centre name', () => {
    let parsedData = parse('Britannia,49.2756,-123.0738,1661 Napier St,http://vancouver.ca/parks/cc/britannia/index.htm');
    expect(parsedData[0].name).to.eq('Britannia');
  });
});
