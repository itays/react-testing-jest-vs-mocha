import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow, mount} from 'enzyme';
import Gravatar from './Gravatar';
import Avatar from './Avatar';
import Email from './Email';
import md5 from 'md5';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });



describe('<Gravatar />', () => {
  const wrapper = shallow(<Gravatar />);
  console.log('sdsfvsv');
  test('contains an <Avatar/> component', () => {
    expect(wrapper.find(Avatar).length).to
  });

  test('contains an <Email/> component', () => {
    expect(wrapper.find(Email).length).toBe(1);
  });

  test('should have an initial email state', () => {
    expect(wrapper.state().email).toBe('someone@example.com');
  })

  test('should have an initial src state', () => {
    expect(wrapper.state().src).toBe('http://placehold.it/200x200');
  });

  test('should update the src state on clicking fetch', () => {
    const wrapper = mount(<Gravatar/>);
    wrapper.setState({ email: 'itaysidis@gmail.com' });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('email')).toEqual('itaysidis@gmail.com');
    expect(wrapper.state('src')).toEqual(`http://gravatar.com/avatar/${md5('itaysidis@gmail.com')}?s=200`);
  });

});