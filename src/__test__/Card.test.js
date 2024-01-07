import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card';

describe('Card', () => {
  it('renders the Card component with the correct name and content', () => {
    const testName = 'Example Card Name';

    render(<Card name={testName} />);

    // Check if the name is rendered
    const nameElement = screen.getByText(testName);
    expect(nameElement).toBeInTheDocument();

    // Check if the content is rendered
    const contentElement = screen.getByText(/Lorem ipsum dolor/i);
    expect(contentElement).toBeInTheDocument();
  });
});
