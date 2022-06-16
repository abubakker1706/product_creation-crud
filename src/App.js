import React,{useState} from "react"
import './App.css';
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import ProductInfo from './components/ProductInfo'
import {Switch,Route} from 'react-router-dom'
import EditProduct from './components/EditProduct'
import {useHistory} from 'react-router-dom'
import Button from '@mui/material/Button'

const Dummy_data=[
  {
    "id":"200",
   "name":"Vivo 17",
    "image":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.reviewcenter.in%2Fwp-content%2Fuploads%2F2019%2F12%2FVivo-V17-Glacier-Ice.jpg&f=1&nofb=1" ,
    "specification":"Massive internal storageSturdy configurationSuperb cameras, both front and rearGreat battery with Fast Charging",
    "price":'Rs 22,199',
  },
  {
    'id':'201',
    'name':'Samsung Note 20',
    'image': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fspennytechnologies.com%2Fwp-content%2Fuploads%2F2020%2F08%2FSamsung-Galaxy-Note-20-Ultra-1.png&f=1&nofb=1',
    'specification':'Robust battery with 25W Fast Charging supportDust proofImpressive RAM and storage duoStunning front and back camera setupUltrasonic onscreen fingerprint sensor',
    'price':'Rs 49,999'
  },
  {
    'id':'203',
    'name':'Iphone 13 pro max',
    'image': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fdpfl37yun%2Fimage%2Fupload%2Fv1633393923%2Fiphone_13_pro_max_silver_select_f991ccd8fa.png&f=1&nofb=1',
    'specification':'Water-resistant IP68Triple camera setup on the backside with an optical image stabilisation6GB RAMApple GPU (five-core graphics)4352mAh battery with 20W Fast Charging Wireless Charging availableiOS 15',
    'price':'Rs 1,29,990'
  },
  {
    'id':'203',
    'name':'OnePlus Nord CE 2 Lite 5G',
    'image': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foasis.opstatics.com%2Fcontent%2Fdam%2Foasis%2Fpage%2F2021%2Febba%2Fspec%2FSilver-Ray.png&f=1&nofb=1',
    'specification':'64MP AI Main Camera5G Qualcomm Snapdragon 695 chipset6GB RAM5000mAh battery33W Super VOOC Charging128GB internal storage5G ReadyOxygen OS',
    'price':'Rs 19,999'
  },
  {
    'id':'204',
    'name':'Xiaomi Redmi Note 11 Pro',
    'image': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.aUO54l6-fChSzzDw9ID7-wHaHa%26pid%3DApi&f=1',
    'specification':'6.67 inches AMOLED display protected by Corning Gorilla Glass v5108MP Main Camera on the rear sideImpressive 16MP Camera on the frontQualcomm Snapdragon 695 chipset6GB RAM Expandable internal space5000mAh battery with 67W Turbo ChargingSidewise fingerprint sensor',
    'price':'Rs 18,999'
  },
  {
    'id':'205',
    'name':'OPPO F21 Pro',
    'image': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mobilepriceall.com%2Fwp-content%2Fuploads%2F2020%2F09%2FOppo-F17-Pro-Metallic-White.jpg&f=1&nofb=1',
    'specification':'Super AMOLED display64MP Main Camera on the rear side32MP Selfie Camera at the frontQualcomm Snapdragon 680 chipset with 8GB RAMSuper VOOC 33W Fast ChargingExpandable internal storage',
    'price':'Rs 22,499'
  },

]

function App() {
  const history=useHistory()
  const [product , setProduct]=useState(Dummy_data)

  const productHandler=(current)=>{

    setProduct((prev)=>[current, ...prev])
  }

  return (
    <div>
    <Button onClick={()=>history.push('/')}>Home</Button>
    <Button onClick={()=>history.push('/add-product')}>Add Product</Button>
    
    <Switch>
 <Route exact path ='/'>
 

     <ProductList product={product} setProduct={setProduct} />
     
 
 </Route>
 <Route exact path='/add-product'>
 <AddProduct productHandler={productHandler}/>
 
 
 </Route>
    

<Route  exact path="/product-info/:id">       


<ProductInfo  product={product} setProduct={setProduct}/>  



</Route>
<Route exact path='/product/edit/:id'>
<EditProduct products={product} setProduct={setProduct}/>


</Route>




</Switch>
</div>
  
    
    
  );
}

export default App;
