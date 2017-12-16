import * as React from 'react';
import * as enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Gravatar from './Gravatar';
import Avatar from './Avatar';
import Email from './Email';
import * as md5 from 'md5';
import * as Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
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
  it('contains an <Avatar/> component', () => {
    expect(wrapper.find(Avatar).length).equals(1);
  });

  it('contains an <Email/> component', () => {
    expect(wrapper.find(Email).length).equals(1);
  });

  it('should have an initial email state', () => {
    expect(wrapper.state().email).equals('someone@example.com');
  });

  it('should have an initial src state', () => {
    expect(wrapper.state().src).equals('http://placehold.it/200x200');
  });

  it('should update the src state on clicking fetch', () => {
    const wrapper = mount(<Gravatar />);
    wrapper.setState({ email: 'itaysidis@gmail.com' });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('email')).equals('itaysidis@gmail.com');
    expect(wrapper.state('src')).equals(`http://gravatar.com/avatar/${md5('itaysidis@gmail.com')}?s=200`);
  });

});