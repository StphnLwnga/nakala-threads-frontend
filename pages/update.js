import React, { Component, useEffect } from 'react';
import Link from 'next/link';
import UpdateItem from '../components/UpdateItem';

const Sell = props => {
	const  { query } = props;
	
	useEffect(
		() => {
			if(typeof window !== 'undefined') {
				window.WOW = require('wowjs');
			}
			new WOW.WOW({ live:false }).init();
		},
	);

	return(
		<UpdateItem id={query.id}/>
	);
}

export default Sell;

{/*
export default class Sell extends Component {
	componentDidMount() {
		if(typeof window !== 'undefined') {
			window.WOW = require('wowjs');
		}
		new WOW.WOW({ live:false }).init();
	}
	
	render() {
		return (
			<UpdateItem id={this.props.query.id}/>
		);
	}
}
*/}