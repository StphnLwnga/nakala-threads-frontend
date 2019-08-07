import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';

const ALL_ITEMS_QUERY = gql`
	query ALL_ITEMS_QUERY {
		items {
			id
			title
			price
			description
			image
			largeImage
		}
	}
`;

const Font = styled.div`
	font-family: '';
`;

const ItemList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 60px;
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
`;

const Items = () => (
	<div>
		<h3 className="text-danger text-center wow zoomIn" 
			data-wow-delay="100ms" 
			data-wow-duration="850ms"
		>
			Items
		</h3>
		<br />

		<Query query={ALL_ITEMS_QUERY}>
			{({ data, error, loading }) => {
				loading && (
				<p classNa me="text-center text-info">
					Loading...
				</p>);

				error && (
					<p className="text-center text-warning wow flash" 
						data-wow-delay="200ms" 
						data-wow-duration="850ms" 
						data-wow-iteration="2"
					>
						{error.message}
					</p>
				);
				
				return (
					<ItemList>
						{data.items.map((item, i) => {
							const t = `${100 + ((i+1) * 150)}ms`;
							return <Item item={item} t={t} key={item.id}/>
						})}
					</ItemList>
				);
			}}
		</Query>
	</div>
);

export default Items;

{/*
export default class Items extends Component {
	render() {
		return (
			<div>
				<h3 className="text-danger text-center wow zoomIn" 
					data-wow-delay="100ms" 
					data-wow-duration="850ms"
				>
					Items
				</h3>
				<br />
				<Query query={ALL_ITEMS_QUERY}>
					{({ data, error, loading }) => {
						if (loading) return (
							<p classNa me="text-center text-info">
								Loading...
							</p>
						);
						if (error) return (
							<p className="text-center text-warning wow flash" 
								data-wow-delay="200ms" 
								data-wow-duration="850ms" 
								data-wow-iteration="2"
							>
								{error.message}
							</p>
						);
						return (
							<ItemList>
								{data.items.map((item, i) => {
									const t = `${100 + ((i+1) * 150)}ms`;
									return <Item item={item} t={t} key={item.id}/>
								})}
							</ItemList>
						);
					}}
				</Query>
			</div>
		);
	}
}
*/}

export { ALL_ITEMS_QUERY };
