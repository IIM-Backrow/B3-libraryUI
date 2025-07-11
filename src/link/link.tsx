import React from 'react';
import './link.css';

export interface LinkProps {
    to: string;
    children: React.ReactNode;
    external?: boolean;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    className?: string;
    [key: string]: any;
}

export default function Link({
    to,
    children,
    external = false,
    onClick,
    className,
    ...rest
}: LinkProps) {
    return (
        <a
            href={to}
            className={className}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            onClick={onClick}
            {...rest}
        >
            {children}
        </a>
    );
};