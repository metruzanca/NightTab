import React, { useState, useEffect } from 'react'
// import classNames from 'classnames'

interface LayoutProps {}

// TODO: Where does 
declare global {
  interface Window {
    __theme: (string|null)
    __onThemeChange: () => void
    __setPreferredTheme: (theme:string) => void
  }
}

export const Layout: React.FC<LayoutProps> = () => {

  const [theme, setTheme] = useState<{theme:string|null}>({theme:null})

  // function handleChangeTheme(e) {
  //   window.__setPreferredTheme(e.target.checked ? 'dark' : 'light')
  // }

  useEffect(() => {
    setTheme({ theme: window.__theme });
    window.__onThemeChange = () => {
      setTheme({ theme: window.__theme });
    };
  }, [])

  return (
    <div>I am Layout</div>
  ) 
}