import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';










const AddProduct=(props)=>{
const[name ,setName]=useState('')
const[image ,setImage]=useState('')
const[price ,setPrice]=useState('')
const[specification ,setSpecification]=useState('')

const formHandler=(event)=>{
event.preventDefault()
const productHandler={
             name:name,
             image:image,
             price:price,
             specification:specification,


}
props.productHandler(productHandler)
}


return(


<div>
<form onSubmit={formHandler}>
<TextField type="text" placeholder="Mobile Name" value={name} onChange={(product)=>setName(product.target.value)}/>
<TextField type="url" placeholder="Mobile url" value={image} onChange={(product)=>setImage(product.target.value)}/>
<TextField type="number" placeholder="Mobile Price" value={price} onChange={(product)=>setPrice(product.target.value)}/>
<TextField type="text" placeholder="Mobile Specification" value={specification} onChange={
                         (product)=>setSpecification(product.target.value)}/>


<Button type="submit">Add Mobile</Button>


</form>



</div>
)
}
export default AddProduct