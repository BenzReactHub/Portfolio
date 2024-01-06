// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Logo } from './NavBar';
// import LogoSvg from '../assets/logo.svg';  // 請確保這個路徑正確

describe('Logo component', () => {
  it('renders Logo component with correct styles and alt text', () => {
    const styles = 'scale-75';
    render(<Logo styles={styles} />);
    
    // Check if the logo image is rendered with the correct alt text
    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).toBeInTheDocument();

    // Check if the logo image has the correct styles
    const logoContainer = screen.getByAltText('Logo');
    expect(logoContainer).toHaveClass('animate-spin-slow', styles, 'sm:h-[3.5rem]', 'md:h-[4rem]');
  });
});
