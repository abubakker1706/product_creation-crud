import ProductItem from './ProductItem'
import './ProductList.css'
import {useHistory} from 'react-router-dom'
import Button from '@mui/material/Button'
const ProductList =(props)=>{
                         const history=useHistory()
                         return(
                         <div className="product-list">

                         
                    {props.product.map((products,index)=>(
                                             <ProductItem
                                             
                                             id= {index}
                                             name={products.name}
                                             image={products.image}
                                             specification={products.specification}
                                             price={products.price}
                                             delete={<Button onClick={()=>{
                                           const deleteItem=props.product.filter((product,idx)=>{
                                                  const deleteIdx=index
                                                  return deleteIdx!==idx
                                           })
                                           props.setProduct(deleteItem)



                                             }}>Delete</Button>}
                                             productInfo={<Button 
                         onClick={()=>history.push('/product-info/' + index)}> view</Button>}
                                             editProduct={<Button 
                                                  onClick ={()=> history.push('/product/edit/'+index)}
                                             
                                             
                                             
                                             >edit</Button>}
                                             
                                             />



                                            
                   
                                             ))}

                                           
                      
                         
                         </div>
                         )
}
export default ProductList;