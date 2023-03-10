import React,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Card from '../../card/Card';
import './ProductForm.scss'

const ProductForm = ({product,productImage,imagePreview,description,setDescription,
    handleInputChange,handleImageChange,saveProduct}) => {
  return (
    <div className='add-product'>
        <Card cardClass={'card'}>
            <form onSubmit={saveProduct}>
                <Card className={'group'}>
                    <label>Product Image</label>
                    <code className='--color-dark'>Supported formats: jpg, jpeg, png</code>
                    <input type='file' name='image' onChange={(e)=>handleImageChange(e)}/>

                    {imagePreview!=null ?
                        (<div className='image-preview'>
                            <img src={imagePreview} alt='product'/>
                        </div>)
                        :
                        (<p>
                            No image set for this product
                        </p>)
                    }
                </Card>  

                <label>Product Name:</label>    
                {/* optional chaining product?.name will first check if product has a name if not it will not throw an error*/}
                <input type='text' placeholder='Product name' name='name' value={product?.name} onChange={handleInputChange}/>   

                <label>Product Category:</label>    
                <input type='text' placeholder='Product Category' name='category' value={product?.category} onChange={handleInputChange}/>   
                
                <label>Product Price:</label>    
                <input type='text' placeholder='Product Price' name='price' value={product?.price} onChange={handleInputChange}/>   

                <label>Product Quantity:</label>    
                <input type='text' placeholder='Product Quantity' name='quantity' value={product?.quantity} onChange={handleInputChange}/>   

                <label>Product Description:</label>    
                <ReactQuill theme='snow' value={description} onChange={setDescription}/>
                
                <div className='--my'>
                    <button type='submit' className='--btn --btn-primary'>
                        Save Product
                    </button>
                </div>
            </form>
        </Card>
    </div>
  )
}

export default ProductForm
