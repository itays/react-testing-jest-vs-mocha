import * as React from 'react';
import * as md5 from 'md5';

import Avatar from './Avatar';
import Email from './Email';

interface Props {

}
export default class Gravatar extends React.Component<Props, {email: string, src: string}> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: 'someone@example.com',
      src: 'http://placehold.it/200x200'
    };
  }

  updateGravatar = (e: Event) => {
    e.preventDefault();
    this.setState({
      src: `http://gravatar.com/avatar/${md5(this.state.email)}?s=200`
    });
  }

  updateEmail = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    this.setState({email: target.value});
  }

  render() {
    return (
      <div className="react-gravatar">
        <h4>Avatar for:</h4>
        <Avatar email={this.state.email} src={this.state.src}/>
        <Email fetchGravatar={this.updateGravatar} handleEmailChange={this.updateEmail}/>
      </div>
    );
  }
}