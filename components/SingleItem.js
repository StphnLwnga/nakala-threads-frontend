import React, {useState} from 'react';
import Head from 'next/head';
import { Query }from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';


const SingleItemStyles = styled.div`
	max-width: 1200px;
	margin: 2rem auto;
	box-shadow: ${props => props.theme.bs};
	display: grid;
	grid-auto-columns: fr;
	grid-auto-flow: column;
	min-height: 880px;
	img{
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	.details{
		margin: 3rem;
		font-size: 2rem;
	}
`;

const SINGLE_ITEM_QUERY = gql`
	query SINGLE_ITEM_QUERY(id: ID!){
		item(where: {id: $id}){
			id
			title
			description
			largeImg
		}
	}
`;

const SingleItem = props => {
	const { id } = props;
	return (
		<React.Fragment>
			<Query query={SINGLE_ITEM_QUERY} variables={{ id }}>
				{
					({data, loading, error}) => {
						error && <ErrorMessage error={error} />;
						loading && <p className="text-center text-info">Loading...</p>;
						!data.item && <p className="text-center text-info">Item Not Found.</p>;
						return (
							<SingleItemStyles>
								<Head>
									<title>Nakala Threads | {data.item.title}</title>
								</Head>
								<img src={data.item.largeImage} alt={data.item.title}/>
								<div className="details">
									<h2 className="text-center"> Viewing {data.item.title}</h2>
									<hr/>
									<p className="">{data.item.description}</p>
								</div>
							</SingleItemStyles>
						)
					}
				}
			</Query>
		</React.Fragment>
	);
}

export default SingleItem;