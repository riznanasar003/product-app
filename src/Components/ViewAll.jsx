import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data,changedData] = useState(
        [
            {
                
                    "proid":"101",
                    "proname":"Scanner",
                    "mandate":"10-03-2014",
                    "price":"7000"
                    
                
            }
        ]
    )
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">PRODUCT ID</th>
                                            <th scope="col">PRODUCT NAME</th>
                                            <th scope="col">MANUFACTURING DATE</th>
                                            <th scope="col">PRICE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {data.map(
                                        (value, index)=>{
                                            return  <tr>
                                            <th scope="row">{value.proid}</th>
                                            <td>{value.proname}</td>
                                            <td>{value.mandate}</td>
                                            <td>{value.price}</td>
                                        </tr>
                                        }
                                       )}
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewAll