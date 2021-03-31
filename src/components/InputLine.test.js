import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputLine from './InputLine';

test('Weight only allows numbers', () => {
  render(<InputLine />);
  
  userEvent.type(screen.getByTestId("myTestInput"), "a")
  expect(screen.getByTestId("myTestInput")).toBeEmptyDOMElement;
});