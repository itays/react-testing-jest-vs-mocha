import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Gravatar from './Gravatar';
import Avatar from './Avatar';
import Email from './Email';
import * as md5 from 'md5';
import * as Adapter from 'enzyme-adapter-react-16';

import * as jsdom from 'jsdom';
const { JSDOM } = jsdom;
const globalAny: any = global;
const dom = new JSDOM('<!doctype html><html><body></body></html>', {url: 'http://localhost/'});
const { window } = dom;
globalAny.window = window;
globalAny.document = window.document;

enzyme.configure({ adapter: new Adapter() });
describe('<Gravatar />', () => {
  const wrapper = shallow(<Gravatar />);
  test('contains an <Avatar/> component', () => {
    expect(wrapper.find(Avatar).length).toBe(1);
  });

  test('contains an <Email/> component', () => {
    expect(wrapper.find(Email).length).toBe(1);
  });

  test('should have an initial email state', () => {
    expect(wrapper.state().email).toBe('someone@example.com');
  });

  test('should have an initial src state', () => {
    expect(wrapper.state().src).toBe('http://placehold.it/200x200');
  });

  test('should update the src state on clicking fetch', () => {
    const wrapper = mount(<Gravatar />);
    wrapper.setState({ email: 'itaysidis@gmail.com' });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('email')).toEqual('itaysidis@gmail.com');
    expect(wrapper.state('src')).toEqual(`http://gravatar.com/avatar/${md5('itaysidis@gmail.com')}?s=200`);
  });

});