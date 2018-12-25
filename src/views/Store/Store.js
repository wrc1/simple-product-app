import './style.css';
import React from 'react';
import { connect } from 'react-redux';
import { Products } from 'views/Products/Products';
import { ProductDetails } from 'views/ProductDetails/ProductDetails';
import actions from '../../actions';

class StoreComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Description: ''
        }
    }

    componentDidMount() {
        this.props.fetchProducts();
     }

    onAddItem = async () => {
        const {Name, Description} = this.state
        const newItem = {
            id: this.props.products.length + 1,
            Name: Name,
            Description: Description,
            price: Math.floor(Math.random() * 16) + 5
        }
        await this.props.addProduct(newItem);
        await this.props.fetchProducts();
    }

    onItemChange = (item) => {
        this.setState({
            Name: item.Name,
            Description: item.Description
        })
    }

    render() {
        return (
            <div className='store'>
                <div className='header-container'>
                    <h1 className={'header'}>App-Store</h1>
                </div>
                <div className='add-button-container'>
                    <button 
                        className='ui primary button add-product'
                        onClick={this.onAddItem}
                    >
                    Add
                    </button>
                </div>
                <div className={'content-wrapper'}>
                    <div className={'products-container'}>
                        <Products products={this.props.products}/>
                    </div>
                    <div className={'product-details-container'}>
                        <ProductDetails onItemChange={this.onItemChange} />
                    </div>
                </div>
                
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (item) => dispatch(actions.addProduct(item)),
        fetchProducts: () => dispatch(actions.fetchProducts())
    }
}
export const Store = connect(mapStateToProps, mapDispatchToProps)(StoreComponent);