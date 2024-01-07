import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Introduction from './Introduction';

describe('Introduction', () => {
  it('renders the Introduction component with the correct content', () => {
    render(<Introduction />);

    // Use getByText to find elements with the specified text content
    const helloText = screen.getByText('Hello!');
    const benText = screen.getByText("Ben");

    // Assert that the elements are in the document
    expect(helloText).toBeInTheDocument();
    expect(benText).toBeInTheDocument();

    // Use getByAltText to find the image by its alt attribute
    const userImage = screen.getByAltText('User');

    // Assert that the image is in the document
    expect(userImage).toBeInTheDocument();
  });

  it('renders the Introduction component with the correct styles', () => {
    render(<Introduction />);

    // Use getByTestId to find elements by data-testid attribute
    const backgroundCircle = screen.getByTestId('background-circle');

    // Assert that the background circle has the correct styles
    expect(backgroundCircle).toHaveClass('bg-primary');
  });
});
