import React, {Component, useState} from 'react';
import Router from 'next/router';
import { Mutation, Query }from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import ErrorMessage from './ErrorMessage';

const SINGLE_ITEM_QUERY = gql`
	query SINGLE_ITEM_QUERY($id: ID!) {
		item(where: {id: $id}){
			id
			title
			description
			price
		}
	}
`;
const UPDATE_ITEM_MUTATION = gql`
	mutation UPDATE_ITEM_MUTATION(
		$id: ID!
		$title: String
		$description: String
		$price: Int
	) {
		updateItem(
			id: $id
			title: $title
			description: $description
			price: $price
		) {
			id
			title
			description
			price
		}
	}
`;

const UpdateItem = props => {
	const { id } = props;

	const [state, setState] = useState({});

	const handleChange = e => {
		const copiedState = {...state};
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		copiedState[name] = val;
		setState(copiedState);
	}

	const updateItemFunc = async (e, mutation) => {
		try{
			e.preventDefault();
			const res = await mutation({
				variables: { 
					id,
					...state,
				},
			});
			Router.push({
				pathname: '/item',
				query: { id: res.data[mutation].id },
			});
		} 
		catch(err) {
			console.error(err);
		}
	}

	return (
		<React.Fragment>
			<Query query={SINGLE_ITEM_QUERY} variables={{ id }}>
				{
					({data, loading}) => {
						loading && <p className="text-center text-info">Loading...</p>;
						
						!data.item && <p className="text-center text-muted">Item Not Found.</p>;
						
						return (
							<Mutation mutation={UPDATE_ITEM_MUTATION} variables={state}>
								{
									(updateItem, {loading, error}) => (
										<Form className="wow zoomIn" data-wow-delay="150ms"
											data-wow-duration="850ms"
											onSubmit={e => updateItemFunc(e, updateItem)}
										>
											<br />
											<h2 className="text-center text-secondary wow fadeInDown"
												data-wow-delay="250ms"
											>
												Update item in your store
											</h2>
											<br />

											<ErrorMessage error={error} />

											<fieldset disabled={loading} aria-busy={loading} >
												<br/><br />
												{
													['Title', 'Price', 'Description'].map((name, i) => (
														<div className="row wow fadeInDown" data-wow-delay="350ms" key={name.toLowerCase()}>
															<div className="col-sm-12 col-md-3">
																<label htmlFor={name.toLowerCase()}>{name}</label>
															</div>
															<div className="col-sm-12 col-md-9">
																<input 
																	type={i===1 ? 'number' : 'text'}
																	id={name.toLowerCase()} 
																	name={name.toLowerCase()}
																	placeholder={name} 
																	required 
																	className="form-control"
																	defaultValue={data.item[name.toLowerCase()]} 
																	onChange={e => handleChange(e)}
																/>
															</div>
														</div>
													))
												}
												<div className="d-flex justify-content-center wow flipInX"
													data-wow-delay="950ms"
												>
													<button type="submit" className="btn-block btn text-light">
														Sav{loading ? 'ing' : 'e'} Changes
													</button>
												</div>
											</fieldset>
										</Form>
									)
								}
							</Mutation>
						)
					}
				}
			</Query>
		</React.Fragment>
	);
}

export { UPDATE_ITEM_MUTATION, SINGLE_ITEM_QUERY };
export default UpdateItem;
