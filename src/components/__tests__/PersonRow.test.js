import React from 'react';
import { render, cleanup, getByText } from '@testing-library/react';
import PersonRow from '../PersonRow';

afterEach(() => {
  cleanup();
});


// UI
describe('PersonRow component', () => {
  it('renders the person row with active status correctly', () => {
    const props = {
      Name: 'John',
      Surname: 'Doe',
      Email: 'johndoe@example.com',
      Telephone: '123456789',
      CityId: 'New York',
      is_active: true
    };

    const { container } = render(<PersonRow {...props} />);

    expect(getByText(container, 'John')).toBeInTheDocument();
    expect(getByText(container, 'Doe')).toBeInTheDocument();
    expect(getByText(container, 'johndoe@example.com')).toBeInTheDocument();
    expect(getByText(container, '123456789')).toBeInTheDocument();
    expect(getByText(container, 'New York')).toBeInTheDocument();
    expect(container.firstChild).not.toHaveClass('strikethrough');
  });

  it('renders the person row with inactive status correctly', () => {
    const props = {
      Name: 'Jane',
      Surname: 'Doe',
      Email: 'janedoe@example.com',
      Telephone: '987654321',
      CityId: 'Los Angeles',
      is_active: false
    };

    const { container } = render(<PersonRow {...props} />);

    expect(getByText(container, 'Jane')).toBeInTheDocument();
    expect(getByText(container, 'Doe')).toBeInTheDocument();
    expect(getByText(container, 'janedoe@example.com')).toBeInTheDocument();
    expect(getByText(container, '987654321')).toBeInTheDocument();
    expect(getByText(container, 'Los Angeles')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('strikethrough');
  });
});
// Integration
describe('PersonRow component', () => {
  it('renders with the correct data', () => {
    const person = {
      Name: 'John',
      Surname: 'Doe',
      Email: 'johndoe@example.com',
      Telephone: '555-555-5555',
      CityId: '1',
      is_active: true
    };

    const { getByText } = render(<PersonRow {...person} />);

    expect(getByText(person.Name)).toBeInTheDocument();
    expect(getByText(person.Surname)).toBeInTheDocument();
    expect(getByText(person.Email)).toBeInTheDocument();
    expect(getByText(person.Telephone)).toBeInTheDocument();
    expect(getByText(person.CityId)).toBeInTheDocument();
  });

  // UI
  it('renders with the strikethrough class when is_active is false', () => {
    const person = {
      Name: 'Jane',
      Surname: 'Doe',
      Email: 'janedoe@example.com',
      Telephone: '555-555-5555',
      CityId: '1',
      is_active: false
    };

    const { container } = render(<PersonRow {...person} />);
    const tr = container.querySelector('tr');
    expect(tr).toHaveClass('strikethrough');
  });
});