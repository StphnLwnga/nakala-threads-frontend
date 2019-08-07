import App, { Container } from 'next/app';
import Page from '../components/Page';
import {ApolloProvider} from 'react-apollo';
import withData from '../lib/withData';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pgProps = {};
		if (Component.getInitialProps) {
			pgProps = await Component.getInitialProps(ctx);
		}
		pgProps.query = ctx.query; //exposes query to user
		return { pgProps };
	}
	
	render() {
		//destructuring 
		const { Component, apollo, pgProps } = this.props;
		
		return(
			<Container>
				<ApolloProvider client={apollo}>
					<Page> 
						<Component {...pgProps}/>
					</Page>
				</ApolloProvider>
			</Container>
		);
	}
}

export default withData(MyApp);
