import React from "react";
import "./test-component.css";

export interface TestComponentProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
  external?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}

export function TestComponent({ to, children, external = false, onClick, className, ...rest }: TestComponentProps) {
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
}
