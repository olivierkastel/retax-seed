import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe('UserInfo', () => {
  it('should exists', () => {
    const UserInfo = require('../UserInfo');

    const wrapper = shallow((
      <UserInfo />
    ));

    expect(wrapper).to.have.length(1);
  });

  it('should render inner components', () => {
    const UserInfo = require('../UserInfo');

    const wrapper = shallow((
      <UserInfo />
    ));

    expect(wrapper.find('div')).to.have.length(1);
  });
});
