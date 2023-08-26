import { Component } from 'react';

import Header from '../app-header/app-header';
import AboutUs from '../about-us/about-us';
import AppBest from '../app-best/app-best';
import SecondHeader from '../second-header/second-header';
import AboutBeans from '../about-beans/about-beans';
import CoffeeFilter from '../coffee-filter/coffee-filter';
import CoffeeSearch from '../coffee-search/coffee-search';
import AppGoodsList from '../app-goods-list/app-goods-list';
import Footer from '../app-footer/app-footer';

import './app.sass';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Solimo Coffee Beans 2 kg', price: '10.73$', img: 'images/solimo_coffee.png', country: 'Brazil', best: true, id: 1},
                {name:'AROMISTICO Coffee 1 kg', price: '6.99$', img: 'images/aromistico_coffee.png', country: 'Kenya', best: true, id: 2},
                {name: 'Presto Coffee Beans 1 kg', price: '15.99$', img: 'images/presto_coffee.png', country: 'Columbia', best: true, id: 3},
                {name:'AROMISTICO Coffee 1 kg', price: '6.99$', img: 'images/aromistico_coffee.png', country: 'Brazil', best: false, id: 4},
                {name:'AROMISTICO Coffee 1 kg', price: '6.99$', img: 'images/aromistico_coffee.png', country: 'Brazil', best: false, id: 5},
                {name:'AROMISTICO Coffee 1 kg', price: '6.99$', img: 'images/aromistico_coffee.png', country: 'Brazil', best: false, id: 6}
            ],
            term: '',
            filter: '',      
        }
        this.maxId = 6;
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term: term })
    }

    onFilterSelect = (filter) => {
        this.setState({ filter })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case "Brazil": 
                return items.filter(item => item.country === 'Brazil');
            case "Kenya": 
                return items.filter(item => item.country === 'Kenya');
            case "Columbia": 
                return items.filter(item => item.country === 'Columbia');
            default: 
                return items;
        }
    }


    render() {
        const {data, term, filter} = this.state;
        const bestItem = data.filter(item => item.best);
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        

        return(
            <div className='app'>
                <Header />
                <AboutUs />
                <AppBest data={bestItem} includeCountry={false}/>
                <SecondHeader />
                <AboutBeans />
                <div className="search-panel">
                    <CoffeeSearch onUpdateSearch={this.onUpdateSearch}/>
                    <CoffeeFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <AppGoodsList
                    data={visibleData}
                    includeCountry={true}
                />
                <Footer />
            </div>
        );
    }
}
export default App;
