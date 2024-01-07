import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardsContainer from '../components/CardsContainer';

describe('CardsContainer', () => {
  it('renders the CardsContainer component with the correct title and children', () => {
    const testTitle = 'Example Title';

    render(<CardsContainer title={testTitle}>
        <div data-testid="child-1">child-1</div>
        <div data-testid="child-2">child-2</div>
        <div data-testid="child-3">child-3</div>
    </CardsContainer>);

    // Check if the title is rendered
    const titleElement = screen.getByText(testTitle);
    expect(titleElement).toBeInTheDocument();

    // Check if the children are rendered
    // Note: You might want to mock the children components for better isolation
    const child1Element = screen.getByTestId('child-1'); // Replace 'child-1' with a suitable test ID
    const child2Element = screen.getByTestId('child-2'); // Replace 'child-2' with a suitable test ID
    const child3Element = screen.getByTestId('child-3'); // Replace 'child-3' with a suitable test ID

    expect(child1Element).toBeInTheDocument();
    expect(child2Element).toBeInTheDocument();
    expect(child3Element).toBeInTheDocument();
    // ... Add more assertions for other children as needed
  });
});
