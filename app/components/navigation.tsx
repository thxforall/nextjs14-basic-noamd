'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const getPathName = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {getPathName === '/' ? '✅' : ''}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{' '}
          {getPathName === '/about-us' ? '✅' : ''}
        </li>
      </ul>
    </nav>
  );
}
