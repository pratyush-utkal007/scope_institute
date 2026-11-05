/**
 * Safely resolves an asset path with Vite's BASE_URL (crucial for GitHub Pages / subfolder deployments)
 * @param {string} path - e.g. "/images/scope_logo.png" or "images/course-python.jpg"
 * @returns {string} - Full asset path with the base URL properly prefixed
 */
export function getAssetUrl(path) {
  if (!path) return '';
  // Return external or data URLs as-is
  if (/^(?:https?:)?\/\//.test(path) || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Prevent double prefixing if path already includes the base segment
  if (cleanBase !== '/' && cleanPath.startsWith(cleanBase.slice(1))) {
    return `/${cleanPath}`;
  }

  return `${cleanBase}${cleanPath}`;
}

