import React, { Component } from 'react';


class Header extends Component{

  render(){
    return(
      <header>
        <nav>
          <img src='http://bit.ly/2OnTTpq' alt='Logo' />
          <div>
            <span>My profile</span>
            <i className='material-icons'>account_circle</i>
          </div>
        </nav>
    </header>

     );
   }
}

export default Header;