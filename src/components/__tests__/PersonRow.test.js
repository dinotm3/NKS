import React from 'react';
import { render } from '@testing-library/react';
import PersonRow from '../PersonRow';

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