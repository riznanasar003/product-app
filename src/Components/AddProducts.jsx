import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddProducts = () => {
    const [data,setData] = useState(
        
            {
                "proid":"",
                "proname":"",
                "mandate":"",
                "price":""
                
            }
        
    )
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue = ()=>{
        console.log(data)
        axios.post("http://localhost:8085/add",data).then(
            (response)=>{
                console.log(data)
                if (response.data.status=="success") {
                    alert("Successfully Added")
                    
                } else {
                    alert("Error")
                    
                }
            }
        ).catch().finally()
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3"> 
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">PRODUCT ID</label>
                    <input type="text" className="form-control" name='proid' value={data.proid} onChange={inputHandler}/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">PRODUCT NAME</label>
                    <input type="text" className="form-control" name='proname' value={data.proname} onChange={inputHandler}/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">MANUFACTURING DATE</label>
                    <input type="date" name="mandate" value={data.mandate} onChange={inputHandler} id="" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">PRICE</label>
                    <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler}/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <button className="btn btn-success" onClick={readValue}>ADD</button>

                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default AddProducts