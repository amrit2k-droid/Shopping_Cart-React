import React, {Component} from 'react'
import { isTSEnumMember } from '@babel/types';
import currency from '../currency'

class Cart extends Component {
    render() {
        const {cartItems} = this.props;
        console.log(cartItems.length);
        const handleClose = () => this.setShow(false);
        const handleShow = () => this.setShow(true);
        return (
            <div>
                <div className="footer">
                    <div className="cartInfo">
                        {cartItems.length === 0 &&
                            <div>
                                <div className="qtyAndAmt">
                                    Qty: 0
                                </div>
                                <div className="qtyAndAmt">
                                    Total: 0
                                </div>
                            </div>
                        }
                        {cartItems.length > 0 &&
                            <div>
                                <div className="qtyAndAmt">Qty: {cartItems.reduce((a, c) => (a + c.count), 0) > 0 ? cartItems.reduce((a, c) => (a + c.count), 0): 0}</div>
                                <div className="qtyAndAmt">
            
                                    Total: {cartItems.reduce((a,c) => (a + c.mrf * c.count), 0) > 0? currency.formatCurrency(cartItems.reduce((a,c) => (a + c.mrf * c.count), 0)): 0}
                                </div>
                            </div>

                        }
                    </div>
                    <button type="button" className="btn btn-success float-right" data-toggle="modal" data-target="#myModal">
                    CHECKOUT
                    </button>
                    
                </div> 
                
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-body">
                        Total Price: {currency.formatCurrency(cartItems.reduce((a,c) => (a + c.mrf * c.count), 0))}
                        { cartItems.reduce((a,c) => (a + c.mrf * c.count), 0) > 0 &&
                        <p><b>Transaction Successful!</b></p>
                        }
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        
                    </div>
                    </div>
                </div>
                </div>

            </div>
        )
    }
}

export default Cart