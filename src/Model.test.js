import Model from './Model';
let expect = require('chai').expect;

describe('The model', () => {
  it('can construct', () => {
    let model = new Model('');
    expect(model.first).to.eq('one');
  });
});
