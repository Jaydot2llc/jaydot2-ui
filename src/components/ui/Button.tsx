import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    className?: string;
    type?: 'button' | 'submit' | 'reset'; // Add the 'type' property
    onClick?: () => void; // Added onClick property
}

export default function Button({ children, className, onClick, ...props }: ButtonProps) {

    return (
        <button
            className={className}
            onClick={onClick} // Added onClick event handler
            {...props}
        >
            {children}
        </button>
    );
}