export function getCSSVar(name:string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name);
}

export function setCSSVar(name:string, value:string|null) {
  document.documentElement.style.setProperty(name, value);
}

// TODO Fill up this object of values that actually get changed so that we can have some nice intellisense/autocomplete
export const CSSVariables = {
  themeRootFontSize: "--theme-root-font-size",
  themeAccent_R: "--theme-accent-r",
  themeAccent_G: "--theme-accent-g",
  themeAccent_B: "--theme-accent-b",
  themeAccent: "--theme-accent",
}
