import * as React from 'react';
interface Props {
  email: string;
  src: string;
}
export default class Avatar extends React.Component<Props, {}> {
  render() {
    return (
      <div className="avatar">
        <p>
          <em>{this.props.email}</em>
        </p>
        <img src={this.props.src} className="img-rounded" alt=""/>
      </div>
    );
  }
}