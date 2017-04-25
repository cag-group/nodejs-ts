import { Hello } from '../src/hello';
import { expect } from 'chai';

describe("Hello class", () => {
  let sut: Hello;
  before(() => {
    sut = new Hello();
  });

  describe('greeting method', () => {
    it('should return banan', () => {
      const result = sut.greeting('banan');
      expect(result).to.equal('Hello, banan');
    });
  });

  describe('square method', () => {
    it('should return squared number', () => {
      const result = sut.square(3);
      expect(result).to.equal(9);
    });
  });
});