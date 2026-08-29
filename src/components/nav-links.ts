export interface NavLink {
  href: string;
  label: string;
}

export function getMainNavLinks(): NavLink[] {
  return [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
  ];
}
