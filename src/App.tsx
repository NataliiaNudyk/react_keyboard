import React from 'react';

type State = {
  lastKey: string | null;
};

export class App extends React.Component {
  state: Readonly<State> = {
    lastKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    const { lastKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastKey
            ? `The last pressed key is [${lastKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
