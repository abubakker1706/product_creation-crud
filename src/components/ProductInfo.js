import {useParams,useHistory } from "react-router-dom"
import './ProductList.css'
import Button from '@mui/material/Button'




const ProductInfo=({product})=>{
                         const history = useHistory()
        const {id} = useParams()
        const products= product[id]              
return <div>
<div>
<img src ={products.image} alt={products.name} className='product-poster'/>
<div>
<h3>{products.name}</h3>
<h3>{products.price}</h3>
</div>

<div>
<p>{products.specification}</p>

</div>

<Button onClick={()=>history.goBack()}>back</Button>



</div>


</div>
}
export default ProductInfo