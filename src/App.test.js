import * as React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
    it('renders App component', () => {
      render(<App />);
  
      screen.debug();
    });
  });
/*
 RTL's render function takes any JSX as argument to render it as output. 
 Afterward, you should have access to the React component in your test. 
 To convince yourself that it's there, you can use RTL's debug function:

 When yo urun this test you will get the following result:
        <body>
        <div>
            <div>
            Hello React
            </div>
        </div>
</body>
*/