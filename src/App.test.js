import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Home from '../src/components/home/Home';

test('renders learn react link', () => {
	const { getByText } = render(<Home />);
	const linkElement = getByText(/FIND A GREAT PARKING SPOT/i);
	expect(linkElement).toBeInTheDocument();
});
