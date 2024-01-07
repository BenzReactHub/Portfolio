import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Nav } from '../components/NavBar';

describe('Nav component', () => {
  it('renders Nav component with Logo, Menu, Item, and Cancel', () => {
    render(
      <Nav>
        <Nav.Item text="Test" url="#test" />
        <Nav.Cancel />
      </Nav>,
    );

    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByAltText('Nav Menu')).toBeInTheDocument();

    // Mobile
    const ulsMobile = screen.getByLabelText('mobile');
    const testMobileItem = [...ulsMobile.childNodes].find((li) => li.textContent === 'Test');
    expect(testMobileItem).toHaveTextContent('Test');
    const cancelMobileBtn = [...ulsMobile.childNodes].find((li) => li.alt === 'Cancel');
    expect(cancelMobileBtn).toHaveAttribute('alt', 'Cancel');

    // Desktop
    const ulsDesktop = screen.getByLabelText('desktop');
    const testDesktopItem = [...ulsDesktop.childNodes].find((li) => li.textContent === 'Test');
    expect(testDesktopItem).toHaveTextContent('Test');
    const cancelDesktopBtn = [...ulsDesktop.childNodes].find((li) => li.alt === 'Cancel');
    expect(cancelDesktopBtn).toHaveAttribute('alt', 'Cancel');

  });

  it('handles click events correctly', () => {
    render(
      <Nav>
        <Nav.Item text="Test" url="#test" />
      </Nav>,
    );

    // Desktop
    const ulsDesktop = screen.getByLabelText('desktop');
    const testDesktopItem = [...ulsDesktop.childNodes].find((li) => li.textContent === 'Test');
    fireEvent.click(testDesktopItem.childNodes[0]);
    expect(testDesktopItem).toHaveClass('sm:text-[#00619A]');
    expect(testDesktopItem).toHaveClass('sm:bg-[#E6EEF5]');
  });

  it('handles toggle event correctly', () => {
    render(
      <Nav />
    );
    const ulsMobile = screen.getByLabelText('mobile');
    expect(ulsMobile).toHaveClass('opacity-0');
    expect(ulsMobile).toHaveClass('ease-out');

    const menu = screen.getByAltText('Nav Menu');
    // Click on the Nav Menu
    fireEvent.click(menu);
    expect(ulsMobile).toHaveClass('opacity-100');
    expect(ulsMobile).toHaveClass('ease-in');
  });
});
