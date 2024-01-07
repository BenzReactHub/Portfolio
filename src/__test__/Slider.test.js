import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Slider from '../components/Slider';

jest.useFakeTimers();

describe('Slider', () => {
  it('renders slides with initial state', () => {
    render(<Slider title="Test Slider" />);
    
    // Ensure that the initial slide is rendered
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('renders next slide when clicking the next button', () => {
    render(<Slider title="Test Slider" />);
    
    // Click the next button
    fireEvent.click(screen.getByText('→'));

    // Ensure that the next slide is rendered
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('renders previous slide when clicking the previous button', () => {
    render(<Slider title="Test Slider" />);
    
    // Click the previous button
    fireEvent.click(screen.getByText('←'));

    // Ensure that the previous slide is rendered
    expect(screen.getByText('6')).toBeInTheDocument();
  });

  it('stops the auto-advancing when clicking the previous or next button', () => {
    render(<Slider title="Test Slider" />);
    
    // Advance the slide automatically (mock timer interval)
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // Click the next button
    fireEvent.click(screen.getByText('→'));

    // Ensure that the auto-advancing is stopped
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
