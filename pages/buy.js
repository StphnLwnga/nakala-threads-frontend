import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';

const Buy = props =>(
	<Container  className='text-center'>
		<p>Buy</p>
		<Link href='/'>
			<a>Home</a>
		</Link>
	</Container>
);

export default Buy;
