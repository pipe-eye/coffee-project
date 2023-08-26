import { Component } from 'react';

import './coffee-search.sass';


class CoffeeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        return(
            <div className="coffee__search">Looking for
                <input type="text"
                    className="search-input"
                    placeholder="start typing here..."
                    value={this.state.term}
                    onChange={this.onUpdateSearch}/>
            </div>
        )
    }
}

export default CoffeeSearch;