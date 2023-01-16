import { render, getByTestId } from '@testing-library/react';
import App from './App';

describe('@Components/App', () => {
  test('should render successfully', () => {
    //arrange
    const { baseElement } = render(<div data-testid='media-img'><App /></div>);
    //act
    const app = getByTestId(baseElement, 'media-img');
    //assert
    expect(app).toBeDefined();
    expect(app).toHaveTextContent('Hello World');
  });
});

