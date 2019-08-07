import React, {Component, useState} from 'react';
import Router from 'next/router';
import { Mutation }from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
// import formatMoney from '../lib/formatMoney';
import ErrorMessage from './ErrorMessage';

const CREATE_ITEM_MUTATION = gql`
	mutation CREATE_ITEM_MUTATION(
		$title: String!
		$description: String!
		$price: Int!
		$image: String
		$largeImage: String
	) {
		createItem(
			title: $title
			description: $description
			price: $price
			image: $image
			largeImage: $largeImage
		) {
			id		
		}
	}
`;

const CreateItem = () => {
	const [state, setState] = useState({
		title: '',
		description: '',
		image: '',
		largeImage: '',
		price: 0,
	});

	// handleChange = e => {
	// 	const { name, type, value } = e.target;
	// 	const val = type === 'number' ? parseFloat(value) : value;
	// 	setState({ [name]: val });
	// }

	const handleChange = e => {
		const copiedState = {...state};
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		copiedState[name] = val;
		setState(copiedState);
	}

	const uploadFile = async e => {
		const file = e.target.file[0];
		const data = new FormData();
		data.append('file', file);
		data.append('upload_preset', 'nakala-threads');
		const res = await fetch(
			'https://api.cloudinary.com/v1_1/stphn/image/upload',
			{
				method: 'POST',
				body: data,
			}
		);
		const img = await res.json();
		setState({
			image: img.secure_url,
			largeImage: img.eager[0].secure_url,
		});
	}

	return (
		<React.Fragment>
			<Mutation mutation={CREATE_ITEM_MUTATION} variables={state}>
				{
					(createItem, {loading, error}) => (
						<Form className="wow zoomIn" data-wow-delay="150ms"
							data-wow-duration="850ms"
							onSubmit={
								async e => {
									e.preventDefault()
									const res = await createItem();
									Router.push({
										pathname: '/item',
										query: { id: res.data.createItem.id },
									});
								}
							}
						>
							<br />
							<h2 className="text-center text-secondary wow fadeInDown" 
								data-wow-delay="250ms"
							>
								Upload an item to your store
							</h2>
							<br />	
							<ErrorMessage error={error} />
							<fieldset disabled={loading} aria-busy={loading} >
								<br/><br />
								<div className="row wow fadeInDown" data-wow-delay="350ms">
									<div className="col-sm-12 col-md-3">
										<label htmlFor="title">Title</label>
									</div>
									<div className="col-sm-12 col-md-9">
										<input type="text" id="title" name="title"
											placeholder="Title" required value={state.title}
											className="form-control" onChange={e => handleChange(e)}
										/>
									</div>
								</div>
								<br />
								<div className="row wow fadeInDown" data-wow-delay="600ms">
									<div className="col-sm-12 col-md-3">
										<label htmlFor="price">Price</label>
									</div>
									<div className="col-sm-12 col-md-9">
										<input type="number" id="price" name="price"
											required value={state.price}
											className="form-control" onChange={e => handleChange(e)}
										/>
									</div>
								</div>
								<br />
								<div className="row wow fadeInDown" data-wow-delay="850ms">
									<div className="col-sm-12 col-md-3">
										<label htmlFor="description">Description</label>
									</div>
									<div className="col-sm-12 col-md-9">
										<textarea id="description" name="description" rows="3"
											placeholder="Description" required value={state.description}
											className="form-control" onChange={e => handleChange(e)}
										/>
									</div>
								</div>
								<br />
								<div className="row wow fadeInDown" data-wow-delay="1100ms">
									<div className="col-sm-12 col-md-3">
										<label htmlFor="file">Image</label>
									</div>
									<div className="col-12 col-sm-12 offset-md-1 col-md-7 custom-file">
										<input type="file" id="file" name="file"
											placeholder="Select a file" required
											className="custom-file-input form-control-file form-control-sm"
											onChange={e => uploadFile(e)}
										/>
										<label className="custom-file-label text-secondary" htmlFor="file">
											
										</label>
									</div>
								</div>
								<br />
								<div className="row">
									<div className="text-center offset-4 col-4">
										{
											state.image &&
											<img src={state.image} alt="Upload preview" 
											width="150"
											className="img-fluid rounded mx-auto d-block"
											/>
										}
									</div>
								</div>
								<br />
								<div className="d-flex justify-content-center wow flipInX" 
									data-wow-delay="950ms"
								>
									<button type="submit" className="btn-block btn text-light">
										Submit
									</button>
								</div>
							</fieldset>
						</Form>
					)
				}
			</Mutation>
		</React.Fragment>
	);
}

export default CreateItem;

/*
export default class CreateItem extends Component {
	state = {
		title: '',
		description: '',
		image: '',
		largeImage: '',
		price: 0,
	}
	
	handleChange = e => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	}
	
	uploadFile = async e => {
		const file = e.target.files[0];
		const data = new FormData();
		data.append('file', file);
		data.append('upload_preset', 'nakala-threads');	// for Cloudinary
		// hit Cloudinary api endpoint
		const res = await fetch('https://api.cloudinary.com/v1_1/stphn/image/upload',
			{
				method: 'POST',
				body: data,
			}
		);
		const img = await res.json();
		this.setState({
			image: img.secure_url,
			largImg: img.eager[0].secure_url, 
		});	
	}
	
	render() {
		return (
			<Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
				{(createItem, {loading, error}) => (
					<Form className="wow zoomIn" data-wow-delay="150ms"
						data-wow-duration="850ms"
						onSubmit={
							async e => { 
								e.preventDefault(); 
								const res = await createItem(); 
								Router.push({
									pathname: '/item',
									query: { id: res.data.createItem.id },
								});
							}
						}
					>
						<br />
						<h2 className="text-center text-secondary wow fadeInDown" 
							data-wow-delay="250ms"
						>
							Upload an item to your store
						</h2>
						<br />	
						<ErrorMessage error={error} />
						<fieldset disabled={loading} aria-busy={loading} >
							<br/><br />
							<div className="row wow fadeInDown" data-wow-delay="350ms">
								<div className="col-sm-12 col-md-3">
									<label htmlFor="title">Title</label>
								</div>
								<div className="col-sm-12 col-md-9">
									<input type="text" id="title" name="title"
										placeholder="Title" required value={this.state.title}
										className="form-control" onChange={this.handleChange}
									/>
								</div>
							</div>
							<br />
							<div className="row wow fadeInDown" data-wow-delay="600ms">
								<div className="col-sm-12 col-md-3">
									<label htmlFor="price">Price</label>
								</div>
								<div className="col-sm-12 col-md-9">
									<input type="number" id="price" name="price"
										required value={this.state.price}
										className="form-control" onChange={this.handleChange}
									/>
								</div>
							</div>
							<br />
							<div className="row wow fadeInDown" data-wow-delay="850ms">
								<div className="col-sm-12 col-md-3">
									<label htmlFor="description">Description</label>
								</div>
								<div className="col-sm-12 col-md-9">
									<textarea id="description" name="description" rows="3"
										placeholder="Description" required value={this.state.description}
										className="form-control" onChange={this.handleChange}
									/>
								</div>
							</div>
							<br />
							<div className="row wow fadeInDown" data-wow-delay="1100ms">
								<div className="col-sm-12 col-md-3">
									<label htmlFor="file">Image</label>
								</div>
								<div className="col-12 col-sm-12 offset-md-1 col-md-7 custom-file">
									<input type="file" id="file" name="file"
										placeholder="Select a file" required
										className="custom-file-input form-control-file form-control-sm"
										onChange={this.uploadFile}
									/>
									<label className="custom-file-label text-secondary" htmlFor="file">
										
									</label>
								</div>
							</div>
							<br />
							<div className="row">
								<div className="text-center offset-4 col-4">
									{
										this.state.image &&
										<img src={this.state.image} alt="Upload preview" 
										width="150"
										className="img-fluid rounded mx-auto d-block"
										/>
									}
								</div>
							</div>
							<br />
							<div className="d-flex justify-content-center wow flipInX" 
								data-wow-delay="950ms"
							>
								<button type="submit" className="btn-block btn text-light">
									Submit
								</button>
							</div>
						</fieldset>
					</Form>
				)}
			</Mutation>
		);
	}
}

export { CREATE_ITEM_MUTATION };

*/