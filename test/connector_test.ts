'use strict';

import * as chai from 'chai';

import { SQLConnector as Connector } from '../src/connector';

const {
  expect
} = chai;

describe('Connector', function () {
  it('works', function () {
    expect(new Connector()).to.be.instanceof(Connector);
  });
});
