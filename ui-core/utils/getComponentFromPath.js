export const getComponentFromPath = (pathname, allComponents) => {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '');
  const [category, componentSlug] = cleanPath.split('/');

  if (!category || !componentSlug) return null;

  const decodedSlug = decodeURIComponent(componentSlug).toLowerCase();

  const match = allComponents.find((comp) => {
    return (
      comp.category.toLowerCase() === category.toLowerCase() &&
      (comp.slug?.toLowerCase() === decodedSlug ||
       comp.name.toLowerCase() === decodedSlug)
    );
  });

  return match || null;
};
