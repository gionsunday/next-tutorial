"use client";

import React from 'react'
import { useThemeContext } from '../context/ThemeContext';

 const ThemeComponent = () => {
    const { theme } = useThemeContext();

  return (
    <div> this is the theme: {theme}</div>
  )
}

export default ThemeComponent
