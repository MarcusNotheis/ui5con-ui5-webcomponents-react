import React, { PureComponent, createRef, RefObject } from 'react';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import './App.css';

class App extends PureComponent {
  private btnRef: RefObject<HTMLElement> = createRef();

  private buttonClickHandler = (e: any) => {
    alert('Hello World!');
  };

  render() {
    return (
      <ThemeProvider>
        <ShellBar primaryTitle="UI5con Demo" secondaryTitle="UI5 Web Components for React" />
        <div className="App">
          <Button onPress={this.buttonClickHandler} disabled={false} design={ButtonDesign.Accept}>
            Click me!
          </Button>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
