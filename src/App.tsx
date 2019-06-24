import { ShellBar } from '@ui5-webcomponents-react/fiori3/lib/ShellBar';
import { ThemeProvider } from '@ui5-webcomponents-react/fiori3/lib/ThemeProvider';
import '@ui5/webcomponents/dist/Button';
import React, { createRef, PureComponent, RefObject } from 'react';
import './App.css';

class App extends PureComponent {
  private btnRef: RefObject<HTMLElement> = createRef();

  private buttonClickHandler = (e: any) => {
    alert('Hello World!');
  };

  componentDidMount() {
    if (this.btnRef.current) {
      this.btnRef.current.addEventListener('press', this.buttonClickHandler);
    }
  }

  render() {
    return (
      <ThemeProvider>
        <ShellBar primaryTitle="UI5con Demo" secondaryTitle="UI5 Web Components for React" />
        <div className="App">
          {/* 
          // @ts-ignore */}
          <ui5-button ref={this.btnRef}>Click me!</ui5-button>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
