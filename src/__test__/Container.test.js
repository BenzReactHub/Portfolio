import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Container from '../components/Container';

describe('Container', () => {
  it('renders the Container component and gets an element by ID', () => {
    const testId = 'example-container';
    const testChildren = <div data-testid="test-child">Test Child</div>;

    render(
      <div data-testid={testId}>
        <Container id={testId}>{testChildren}</Container>
      </div>,
    );

    // Check if the container has the correct ID
    const containerElement = screen.getByTestId(testId);
    expect(containerElement).toBeInTheDocument();

    // Get an element by ID using document.getElementById
    // eslint-disable-next-line testing-library/no-node-access
    const elementById = document.getElementById(testId);
    // eslint-disable-next-line testing-library/no-node-access
    expect(elementById.parentNode).toBe(containerElement);

    // Check if the children are rendered
    const testChildElement = screen.getByTestId('test-child');
    expect(testChildElement).toBeInTheDocument();
    expect(testChildElement).toHaveTextContent('Test Child');
  });
});
