export const applyBaseColors = (theme = {}) => {
  const root = typeof document !== 'undefined' ? document.documentElement : null;
  if (!root) return;

  Object.entries(theme).forEach(([key, value]) => {
    const cssVar = `--${key.replace(/_/g, '-')}`
    document.documentElement.style.setProperty(cssVar, value);
  });
};
