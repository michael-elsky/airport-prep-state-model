import { Component } from 'react';

class Header extends Component<{ handleClick: () => void }> {
  render() {
    return <button onClick={this.props.handleClick}>CLick</button>;
  }
}

export default Header;
