import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the Footer component with the correct content', () => {
    render(<Footer />);

    // Use getByText to find an element with the specified text content
    const footerText = screen.getByText('footer');

    // Assert that the element is in the document
    expect(footerText).toBeInTheDocument();

    // You can add additional assertions based on your component's structure and styles
    // For example, check for the background color or other styling
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toHaveClass('bg-[#2c2c2c]');
  });
});
