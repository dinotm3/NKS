import {render, screen, cleanup } from '@testing-library/react';
import PersonGrid from '../PersonGrid';

afterEach(() => {
    cleanup();
})
test ('should render PersonGrid component', () => {
    render(<PersonGrid/>);
    const element = screen.getByTestId('tid-1');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("First name");
    expect(element).toHaveTextContent("E-mail");
    expect(element).toHaveTextContent("Gender");
    expect(element).toHaveTextContent("IP address");

    expect(element).toContainHTML("<table");
})