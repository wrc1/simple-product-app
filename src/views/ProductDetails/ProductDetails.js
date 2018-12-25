import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'components/Input/Input';
import {Textarea} from 'components/Textarea/Textarea';
import actions from '../../actions'

class ProductDetailsComponent extends React.Component {
   
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.state = {
            formValues: {
                Name: null,
                Description: null
            }
        }   
    }

    componentDidUpdate(prevState, prevProps) {

        if (JSON.stringify(prevState.product) !== JSON.stringify(this.product)) {
            const _formValues = {
                Name: this.product.Name,
                Description: this.product.Description
            }
            this.setState({formValues: _formValues})
        }
    }

    get product() {
        return this.props.product;
    }

    get formValues() {
        return this.state.formValues;
    }
   
    onFormValuesChanges = (element) => (e) => {
        const value = e.target.value;
        const newFormValues = {...this.formValues}
        switch(element) {
            case 'input':
                newFormValues.Name = value
                this.setState({formValues: newFormValues})
                break;
            case 'textarea':
                newFormValues.Description = value;
                 this.setState({formValues: newFormValues})
        }
        this.props.onItemChange(newFormValues);
    }

    onSubmitForm = async (e) => {
        e.preventDefault();
        console.log(Object.values(this.formValues).length)
        if (this.formValues.Name === null  || this.formValues.Description === null)
            return;
        await this.props.updateProduct(this.formValues, this.product.id)
        await this.props.fetchProducts();
    }

    render() {
        if (!this.props.product) return null
        return (
            <div className={'product-details'}>
                 <form 
                    className={'ui form'}
                    onSubmit={this.onSubmitForm}
                    ref={this.formRef}
                 >
                 <div className={'field'}>
                    <label>
                        Name:
                        <Input 
                            type={"text"}
                            onChange={this.onFormValuesChanges('input')} 
                            value={this.formValues.Name} 
                        />
                    </label>
                 </div>
                 <div className={'field'}>
                    <label>
                        Description:
                        <Textarea 
                            type={"textarea"} 
                            onChange={this.onFormValuesChanges('textarea')} 
                            value={this.formValues.Description}
                        />
                    </label>
                 </div>  
                <button class="ui button" type="submit">Update</button>
                </form>
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
        fetchProducts: () => dispatch(actions.fetchProducts()),
        updateProduct: (product, id) => dispatch(actions.updateProducts(product, id))
    }
}

export const ProductDetails =  connect(mapStateToProps, mapDispatchToProps)(ProductDetailsComponent);