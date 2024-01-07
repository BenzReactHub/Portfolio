import React from 'react';
// eslint-disable-next-line no-unused-vars
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Circular, { Item } from '../components/Circular';

describe('Item', () => {
  it('renders the Item component with the correct content and styles', () => {
    render(
      <Item positionX={1} positionY={2} radius={3} isToggle>
        <span>Test Content</span>
      </Item>,
    );

    // Query for the content
    const contentElement = screen.getByText('Test Content');

    // Ensure that the content is rendered
    expect(contentElement).toBeInTheDocument();

    // Ensure that the styles are applied correctly
    // eslint-disable-next-line testing-library/no-node-access
    const parentElement = contentElement.parentElement;
    expect(parentElement).toHaveClass(
      'translate-x-[1rem] translate-y-[2rem] opacity-100',
    );
  });
});

jest.useFakeTimers();

describe('Circular', () => {
  it('renders the Circular component with the correct content', () => {
    render(<Circular title="Test Circular" />);
    
    // Ensure that the title is rendered
    expect(screen.getByText('Test Circular')).toBeInTheDocument();

    // Ensure that all six menu items are rendered
    const circularArray = screen.getAllByLabelText('circular-menu');
    [...circularArray].forEach((menu, idx) => expect(menu).toHaveTextContent(`Menu ${idx + 1}`))
    
  });

  it('toggles the menu items on button click', () => {
    render(<Circular title="Test Circular" />);
    
    // Click the toggle button
    const circularArray = screen.getAllByLabelText('circular-menu');
    [...circularArray].forEach((menu) => expect(menu).toHaveClass('opacity-100'))
    fireEvent.click(screen.getByText('Click Me'));
    [...circularArray].forEach((menu) => expect(menu).toHaveClass('opacity-0'))
  });

//   it('stops the auto-toggling when clicking the button', () => {
//     render(<Circular title="Test Circular" />);
    
//     // Advance the timers (auto-toggling)
//     act(() => {
//       jest.advanceTimersByTime(5000);
//     });

//     // Click the toggle button
//     fireEvent.click(screen.getByText('Click Me'));

//     // Ensure that the auto-toggling is stopped
//     act(() => {
//       jest.advanceTimersByTime(5000);
//     });

//     for (let i = 1; i <= 6; i++) {
//       expect(screen.getByLabelText(`Menu ${i}`)).toHaveClass('opacity-0');
//     }
//   });
});