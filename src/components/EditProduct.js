
import React,{useState} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';












const EditProduct =({products ,setProduct})=>{
const history =useHistory()
const {id}=useParams();
const product = products[id]
const[name ,setName]=useState(product.name)
const[image ,setImage]=useState(product.image)
const[price ,setPrice]=useState(product.price)
const[specification ,setSpecification]=useState(product.specification)

const formHandler=(event)=>{
event.preventDefault()
const updateProduct={
             name:name,
             image:image,
             price:price,
             specification:specification,


}
const copyProduct =[...products]
copyProduct[id]=updateProduct
setProduct(copyProduct)
history.push('/')
console.log(copyProduct)
}
return(

                         <div>
                         <form onSubmit={formHandler}>
                         <TextField type="text" label="Mobile Name" value={name} onChange={(pro)=>setName(pro.target.value)}/>
                         <TextField type="url" label="Mobile url" value={image} onChange={(pro)=>setImage(pro.target.value)}/>
                         <TextField type="number" label="Mobile Price" value={price} onChange={(pro)=>setPrice(pro.target.value)}/>
                         <TextField type="text" label="Mobile Specification" value={specification} onChange={
                                                  (pro)=>setSpecification(pro.target.value)}/>
                         
                         
                         <Button type="submit">Update Mobile</Button>
                         
                         
                         </form>
                         
                         
                         
                         </div>

)
}
export default EditProduct