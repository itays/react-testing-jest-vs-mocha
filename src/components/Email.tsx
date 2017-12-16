import * as React from 'react';
interface Props {
  fetchGravatar: any;
  handleEmailChange: any;

}
export default class Email extends React.Component<Props, {}> {
  
  render() {
    return (
      <div className="form-group">
      <form onSubmit={this.props.fetchGravatar}>
        <input 
          type="text"
          className="form-control"
          onChange={this.props.handleEmailChange} 
          style={{width: 200, margin: '5px auto'}} 
        />
        <button onClick={this.props.fetchGravatar} className="btn-success btn ">Fetch</button>
        </form>
      </div>
    );
  }
}
