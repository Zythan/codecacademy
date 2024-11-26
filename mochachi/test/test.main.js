import {a,b} from '../src/main.js'
import { expect } from 'chai';

console.log(a,b)

describe('My Test Suite', () => {
  it('Should test a variable', () => {    
    expect(a).to.be.equal(10);
  });
  it('Should test a condition', () => {    
    expect(a+b).to.be.lessThan(7);
  });
  it('Should test a condition', () => {    
    expect(a+b+4).to.be.greaterThan(11);
  });
});