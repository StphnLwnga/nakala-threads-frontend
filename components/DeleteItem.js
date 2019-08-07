import React from 'react';
import { Mutation }from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_ITEMS_QUERY } from './Items';
import ErrorMessage from './ErrorMessage';

const DELETE_ITEM_MUTATION = gql`
	mutation DELETE_ITEM_MUTATION($id: ID!){
		deleteItem(id: $id){
			id
		}
	}
`;

const DeleteItem = props => {
	const { id, children } = props;

	const update = (cache, payload) => {	//cache & payload accessible via Apollo
		const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
		// console.log(data, payload);
		data.items = data.items.filter(item =>(
			item.id !== payload.data.deleteItem.id
		));
		cache.writeQuery({ query: ALL_ITEMS_QUERY, data })
	}

	return(
		<React.Fragment>
			<Mutation 
				mutation={DELETE_ITEM_MUTATION} 
				variables={{ id }}
				update={() => update()}
			>
				{
					(deleteItem, {error}) => (
						<React.Fragment>
							<button 
								className="btn btn-lg text-secondary"
								onClick={() => {
									confirm('Are you sure you want to delete this item?') && deleteItem();
								}}
							>
								{children}			
							</button>

							<ErrorMessage error={error} />
						</React.Fragment>
					)
				}
			</Mutation>
		</React.Fragment>
	);
}

export default DeleteItem;