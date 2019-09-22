import React, {Component} from 'react'
import currency from '../currency'
import { isTemplateElement } from '@babel/types';
import Cart from './Cart'
import '../stylecomp.css'
class Product extends Component {
    render() {
        const {cartItems} = this.props;
        console.log(cartItems);
        
        const productItems = this.props.products.map(product => (
            <div key={product.id}>
                <div className="content">
                    <div className="parent">
                    <img  className="styleimage" src={product.img_url}  alt={product.product_name}/>
                    <p className="offerDesc">{product.offer_text}</p>
                    </div>
                    <div className="productdesc">
                        <p className="pdtName">{product.brand_name}</p>
                        <p>{product.product_name}</p>
                        <p>{product.quantity}</p>
                        <p>{product.price}</p>
                        <p className="pdtMrf">{   currency.formatCurrency(product.mrf)}</p>
                        <a href={`#${product.id}`}>
                           <button className="btn btn-success" onClick={(e) => this.props.handleAddToCart(e, product)}>Add To Cart</button>
                           <button className="btn btn-default btn-sm" onClick={(e) => this.props.handleAddToCart(e, product)}><span className="glyphicon glyphicon-plus-sign"></span><h1><b>+</b></h1></button>
                           
                           <button className="btn btn-default btn-sm" onClick={(e) => this.props.handleRemoveFromCart(e, product)}><span className="glyphicon glyphicon-plus-sign"></span><h1><b>-</b></h1></button>
                        </a>
                   </div>
                </div>
                <hr/>
            </div>
        ))
        return (
            <div>
                {productItems}
            </div>
        )
    }
}

export default Product