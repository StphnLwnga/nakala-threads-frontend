import React, { Component, useEffect } from 'react';
import Link from 'next/link';
import CreateItem from '../components/CreateItem';

const Sell = () => {
	useEffect(
		() => {
			if(typeof window !== 'undefined') {
				window.WOW = require('wowjs');
			}
			new WOW.WOW({ live:false }).init();
		},
	);

	return(
		<CreateItem/>
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
			<CreateItem />
		);
	}
}
*/}
