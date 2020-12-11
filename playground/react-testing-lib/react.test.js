
import React from 'react'
import {render} from '@testing-library/react'

import App from './App'

describe("My React componnet tesint", () => {
  it("render the title of componnet", () => {
    const {getByText} = render(<App />);
    const element = getByText('This is counter app');
    expect(element).toBeInTheDocument();
  });
});