import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
	<NavStyles>
    <Link href="/items">
      <a className="text-secondary">Shop</a>
    </Link>
    <Link href="/sell">
      <a className="text-secondary">Sell</a>
    </Link>
    <Link href="/signup">
      <a className="text-secondary">Signup</a>
    </Link>
    <Link href="/orders">
      <a className="text-secondary">Orders</a>
    </Link>
    <Link href="/me">
      <a className="text-secondary">Account</a>
    </Link>
  </NavStyles>
);

export default Nav;
