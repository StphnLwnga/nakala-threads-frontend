import React, { Component, useEffect} from 'react';
import Items from '../components/Items';
// import Home from './items';

const Home = () => {
	useEffect(
		() => {
			if(typeof window !== 'undefined') {
				window.WOW = require('wowjs');
			}
			new WOW.WOW({ live:false }).init();
		},
	);

	return (
		<div>
			<Items />
		</div>
	);
}

export default Home;

{/*
class Home extends Component {
	componentDidMount() {
		if(typeof window !== 'undefined') {
			window.WOW = require('wowjs');
		}
		new WOW.WOW({ live:false }).init();
	}
	
  render() {
		return (
			<div>
				<Items />
			</div>
		); 
	}
  
}

export default Home;
*/}