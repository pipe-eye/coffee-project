import './coffee-filter.sass';


const CoffeeFilter = (props) => {
    const buttonsData = [
        {   country: 'Brazil',
            label: 'Brazil'
        },
        {   country: 'Kenya',
            label: 'Kenya'
        },
        {   country: 'Columbia',
            label: 'Columbia'
        }
    ];

    const buttons = buttonsData.map(({country, label}) => {
        return(
            <button type="button"
                        className={'btn'}
                        key={country}
                        onClick={() => props.onFilterSelect(country)}>
                        {label}
                </button>
        )
    })

    return(
        <div className="filter__panel">Or filter
            <div className="btn-group">
                {buttons}
            </div>    
        </div>
    )
}

export default CoffeeFilter;