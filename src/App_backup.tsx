import { ShellBar, ThemeProvider, Text, Button } from '@ui5/webcomponents-react';
import '@ui5/webcomponents/dist/Button';
import React, { createRef, PureComponent, RefObject } from 'react';
import './App.css';

class App extends PureComponent {
  state = {
    count: 0
  };

  private btnRef: RefObject<HTMLElement> = createRef();

  private onButtonPress = (e: any) => {
    this.setState({
      count: this.state.count + 1
    });
  };

  componentDidMount() {
    if (this.btnRef.current) {
      this.btnRef.current.addEventListener('press', this.onButtonPress);
    }
  }

  render() {
    const { count } = this.state;
    return (
      <ThemeProvider>
        <ShellBar
          primaryTitle="UI5con Demo"
          secondaryTitle="UI5 Web Components for React"
          logo="https://appletouchicons-eacp.dispatcher.hana.ondemand.com/SAP/Icon-60.png"
          showCoPilot
          showNotifications
          showProductSwitch
          notificationCount={`${this.state.count}`}
        />
        <div className="App">
          <Text>Click Count: {this.state.count}</Text>
          <br />
          <ui5-button ref={this.btnRef} disabled={count >= 3}>
            Click UI5 Web Component
          </ui5-button>
          <br />
          <Button onPress={this.onButtonPress} disabled={count >= 3}>Click React</Button>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
