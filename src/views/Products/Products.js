import './style.css';
import React from 'react';
import { connect } from 'react-redux';
import { Product } from 'components/Product/Product'
import actions from '../../actions'

class ProductsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    onSelectProduct = ({product}) => () => {
        this.props.selectProduct(product);
    }

    renderProducts = () => {
        return this.props.products
        .map((item, key) => 
            <div 
                className={'item'} 
                key={key}
                onClick={(() => this.props.selectProduct(item))}
                >
                <div className={'content'}>
                    <Product item={item}/>
                </div>
            </div>
            )
    }

    render() {
        return(
            <div className={'products'}>
                <div className={'products-list'}>
                    {this.renderProducts()}
                </div>
            </div>
            
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         products: state.products,
//     }
// }


const mapDispatchToProps = (dispatch) => {
    return {
        selectProduct: (product) => dispatch(actions.selectedProduct(product)),        
    }
}
export const Products = connect(null, mapDispatchToProps)(ProductsComponent);