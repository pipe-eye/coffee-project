import './goods-list-item.sass';

const GoodsListItem = (props) => {

    const {name, price, img, country} = props;

    return(
        <li className='list__item list__item_all'>
            <img src={img} alt="coffee_img" />
            <div className="list__wrapper">
                <div className="name">{name}</div>
                <div className="country">{country}</div>
                <div className="price">{price}</div>
            </div>
        </li>
    )

}

export default GoodsListItem;