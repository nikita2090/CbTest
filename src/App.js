import React, { Component } from 'react';

import TableHead from './components/TableHead';
import TableRow from './components/TableRow';
import Preloader from './components/Preloader';

import randomNum from './randomNum';


//FOR DEVELOPMENT:
const PORT = 3000;

//FOR PRODUCTION:
/*const PORT = 5000;*/


const BASE_PATH = `http://localhost:${PORT}/data/`;


class App extends Component {
	state = {
		data: [],
		page: 1,
		isLoaded: false
	};

	componentDidMount() {
		const {page} = this.state;
		this.fetchData(page);

		document.addEventListener('scroll', this.addData);
	}


	componentWillUnmount() {
		document.removeEventListener('scroll', this.addData);
	}


	fetchData = async (page) => {
		this.setState({
			isLoaded: false
		},async () => {
			try {
				const url = this.calculateUrl(BASE_PATH, page);
				let res = await fetch(url);

				if (!res.ok) alert("HTTP-Error: " + res.status);

				let newData = await res.json();
				const { data } = this.state;

				this.setState({
					data: [...data, ...newData],
				});
			} catch (err) {
				alert(err);
			} finally {
				this.setState({
					isLoaded: true
				});
			}
		});
	};

	addData = () => {
		const { page } = this.state;
		if (page >= 5) return;

		let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
		if (windowRelativeBottom - 100 > document.documentElement.clientHeight) return;

		this.fetchData(page + 1);

		this.setState({
			page: page + 1
		});
	};

	calculateUrl(path, page){
		const file = `cars-${page}.json`;
		return path + file;
	}

	render() {
		const { data, isLoaded } = this.state;
		const rows = data.map(obj => (
				<TableRow car={obj}
				          key={obj.Weight_in_lbs + randomNum(1000)}/>
		));

		return (
			<div>
				<table className="table">
					<TableHead/>
					<tbody>
						{rows}
					</tbody>
				</table>
				{!isLoaded && <Preloader/>}
			</div>
		)
	}
}

export default App;
