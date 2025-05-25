export const getComponentFromPath = (pathname, allComponents) => {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '');
  const [category, componentSlug] = cleanPath.split('/');

  if (!category || !componentSlug) return null;

  let decodedSlug = decodeURIComponent(componentSlug).toLowerCase();

  const [rawSlug, slugProject] = decodeURIComponent(componentSlug).split('|');
  decodedSlug = rawSlug.toLowerCase()
  const match = allComponents.find((comp) => {

    return (
      comp.category.toLowerCase() === category.toLowerCase() &&
      (comp.slug?.toLowerCase() === decodedSlug ||
        comp.name.toLowerCase() === decodedSlug) &&
      comp.useIn.includes(slugProject)
    );
  });

  return match || null;
};
