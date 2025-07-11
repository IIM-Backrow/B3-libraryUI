
import { render, screen } from '@testing-library/react';
import Link from './link';

describe('Link component', () => {
    it('renders the link with correct href', () => {
        render(<Link to="https://example.com">Example</Link>);
        
        const linkElement = screen.getByText('Example');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.getAttribute('href')).toBe('https://example.com');
    });

    it('renders external link with target and rel attributes', () => {
        render(<Link to="https://example.com" external>External Link</Link>);
        
        const linkElement = screen.getByText('External Link');
        expect(linkElement).toHaveAttribute('target', '_blank');
        expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    });
});