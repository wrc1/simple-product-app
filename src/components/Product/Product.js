import './style.css';
import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
class ProductComponent extends React.Component {

    onDelete = async (e) => {
        e.stopPropagation();
        await this.props.deleteProduct(this.props.item.id)
        await this.props.updateList();
    }

    render() {
        
        return (
            <div 
                className={'product'}
            >
                <div className='image-container'>
                    <img src={require('views/productImage.jpg')} />
                </div>
                <div className='product-name'>{this.props.item.Name}</div>
                <div className='product-description'>{this.props.item.Description}</div>
                <div className='button-container'>
                    <button 
                        className='ui red button deleteButton'
                        onClick={this.onDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        )
    }
   
}

const mapStateToProps = (state) => {
    return {
        product: state.selectedProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateList: () => dispatch(actions.fetchProducts()),
        deleteProduct: (id) => dispatch(actions.deleteProduct(id)) 
    }
}

export const Product =  connect(mapStateToProps, mapDispatchToProps)(ProductComponent);