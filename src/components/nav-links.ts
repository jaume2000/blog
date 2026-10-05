export interface NavLink {
  href: string;
  label: string;
  /** Other path prefixes that should mark this link as the current page. */
  activeFor?: string[];
}

export function getMainNavLinks(): NavLink[] {
  return [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/freelance', label: 'Freelance', activeFor: ['/services', '/work'] },
  ];
}

export function isNavLinkActive(link: NavLink, pathname: string): boolean {
  if (link.href === '/') return pathname === '/';
  return [link.href, ...(link.activeFor ?? [])].some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}
