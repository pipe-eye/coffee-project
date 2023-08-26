import GoodsListItem from "../goods-list-item/goods-list-item";

import './app-goods-list.sass';

const AppGoodsList = ({data}) => {

    const elements = data?.map(item => {
        const {id, ...itemProps} = item;
        
        return (
            <GoodsListItem
                key={id}
                includeCountry={false}
                {...itemProps}/>
        )
    })

    return (
        <ul className="cards cards__all">
            {elements}
        </ul>
    )
}

export default AppGoodsList;