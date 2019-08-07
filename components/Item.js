import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import Emoji from './Emoji';
import DeleteItem from './DeleteItem';

/*
const Item = props => {
	const { item, t } = props;

	return (
		<div className="wow zoomIn" 
			data-wow-delay={t} data-wow-duration="750ms"
		>
			<ItemStyles>
				{
					item.image && 
					<img className="img-fluid rounded" src={item.image} alt={item.title}/>
				}
				<Title>
					<Link href={{
						pathname: '/item',
						query: { id: item.id },
					}}>
						<a>{item.title}</a>
					</Link>
				</Title>

				<PriceTag>{formatMoney(item.price)}</PriceTag>

				<p className="text-center text-secondary">
					{item.description}
				</p>
			</ItemStyles>

			<div className="buttonList text-center d-flex justify-content-around">
				<Link href={{
					pathname: 'update',
					query: { id: item.id },
				}}>
					<a>
						<button className="btn btn-lg text-secondary">
							Edit <Emoji label="pencil" symbol="✏️" />
						</button>
					</a>
				</Link>
				<button className="btn btn-lg text-secondary"> 
					<h3>
						<span className=".d-none .d-sm-block">Add</span> <Emoji label="cart" symbol="🛒️" />
					</h3>
				</button>
				<button className="btn btn-lg text-secondary">
					Delete			
				</button>
			</div>
		</div>
	);
}

export default Item;
*/

export default class Item extends Component {
	static propTypes = {
		item: PropTypes.object.isRequired,		//TODO: flesh out specific props later
	}
	
	render() {
		const { item, t } = this.props;

		return (
			<div className="wow zoomIn" 
				data-wow-delay={t} data-wow-duration="750ms"
			>
				<ItemStyles>
					{item.image && 
						<img className="img-fluid rounded" src={item.image} alt={item.title}/>
					}

					<Title>
						<Link href={{ pathname: '/item', query: { id: item.id }, }}>
							<a>{item.title}</a>
						</Link>
					</Title>

					<PriceTag>
						{formatMoney(item.price)}
					</PriceTag>

					<p className="text-center text-secondary">
						{item.description}
					</p>
				</ItemStyles>

				<div className="buttonList text-center d-flex justify-content-around">
					<Link href={{ pathname: 'update', query: { id: item.id }, }}>
						<a>
							<button className="btn btn-lg text-secondary">
								Edit <Emoji label="pencil" symbol="✏️" />
							</button>
						</a>
					</Link>

					<button className="btn btn-lg text-secondary"> 
						<h3>
							<span className=".d-none .d-sm-block">Add</span> <Emoji label="cart" symbol="🛒️" />
						</h3>
					</button>
					
					<DeleteItem id={item.id}>
						Delete
					</DeleteItem>
				</div>
			</div>
		);
	}
};
