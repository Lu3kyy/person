import Link from "next/link";


//easy nav
const NavLinks = () => {
  return (
      <nav style={{ display: 'flex', gap: '20px', padding: '10px' }}>
        <Link href="/">Home</Link>
        <Link href="/pages/about">About</Link>
        <Link href="/pages/why">Why?</Link>
        <Link href="/pages/pictures">Pictures</Link>
      </nav>
  );
};

export default NavLinks;