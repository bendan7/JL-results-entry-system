import React from 'react';
import logo from '../logo.png';



function Header() {

  return (
      
    <div>
        <div className="d-flex justify-content-between align-items-center p-1 p-sm-4">
        <img src={logo} className="logo" alt="logo" style={{maxWidth:"200px", backgroundColor:"transparent"}} />
            <div>מערכת הזנת תוצאות</div> 
        </div>
    </div>
  );

}
export default Header;