import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../Components/collection-preview/collection-preview.component'
class ShopPage extends React.Component
{
    constructor(Props)
    {
        super(Props);
        this.state ={
            Collections: SHOP_DATA
        };

    }
    render() {
        const {Collections} = this.state;
        return(
            <div className = "shop-page">
            {
                Collections.map(({id,...otherParameters}) => (
                    <CollectionPreview key = {id} {...otherParameters} />
                )
                )
            }
            </div>
        )
    }

}
export default ShopPage;