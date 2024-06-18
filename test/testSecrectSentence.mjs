import { expect } from 'chai';
import {
  decodeLuka,
  functionalDecodeLuka,
} from '../secretSentence/challenge.mjs';

describe('Challenge Functions', () => {
  describe('decodeLuka', () => {
    it('Decode the sentence', () => {
      expect(decodeLuka('ipi')).to.equal('i');
    });
  });

  describe('decodeLuka', () => {
    it('Decode the sentence', () => {
      expect(decodeLuka('ipi lipikepe')).to.equal('i like');
    });
  });

  describe('decodeLuka', () => {
    it('Decode the sentence', () => {
      expect(decodeLuka('ipi lipikepe yopoupu.')).to.equal('i like you.');
    });
  });

  describe('functionalDecodeLuka', () => {
    it('Decode the sentence', () => {
      expect(functionalDecodeLuka('ipi')).to.equal('i');
    });
  });

  describe('functionalDecodeLuka', () => {
    it('Decode the sentence', () => {
      expect(functionalDecodeLuka('ipi lipikepe')).to.equal('i like');
    });
  });

  describe('functionalDecodeLuka', () => {
    it('Decode the sentence', () => {
      expect(functionalDecodeLuka('ipi lipikepe yopoupu.')).to.equal(
        'i like you.',
      );
    });
  });
});
