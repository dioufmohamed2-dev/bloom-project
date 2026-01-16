import React from 'react';
import { NavLink } from 'react-router-dom';
// @ts-ignore
import logo from "../../../assets/images/logo-bloom.png";

interface LogoProps {
  className?: string;
  onClick?: (() => void) | undefined;
}

export const Logo: React.FC<LogoProps> = ({ className = '', onClick }: LogoProps) => {
  return (
    <NavLink to="/" onClick={onClick} className={`flex items-center gap-2 ${className}`}>
      <img src={logo} alt="Bloom Project" className="h-10" />
    </NavLink>
  );
};
