import { Component } from 'react';
import AppGoodsList from '../app-goods-list/app-goods-list';
import './app-best.sass';

class BestCoffee extends Component {

    render(){
        return (
            <div className="best__wrapper">
                <div className="best__title">
                    Our best
                </div>
                <div>
                    <AppGoodsList data={this.props.data}/>
                </div>
            </div>
        )
    }
}

export default BestCoffee;