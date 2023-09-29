import React from 'react';
import '../styled/Footer.css';

function Footer() {
    const year = new Date().getFullYear();
  return (
          <div style={{backgroundColor:'gray',color:"black"}}>
            <div>
                <div>
                <h5 style={{display:"flex",justifyContent:"center",margin:0}}>&#169; Copyright {year} </h5>
                </div>
      
            </div>
          </div>
        )
      }

export default Footer;