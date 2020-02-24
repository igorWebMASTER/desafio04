import React, { Component } from 'react';


class Header extends Component{

  render(){
    return(
      <header>
        <nav>
          <img src='http://bit.ly/2OnTTpq' alt='Logo' />
          <div>
            <strong>My profile</strong >
            <i className='material-icons'>account_circle</i>
          </div>
        </nav>
    </header>

     );
   }
}

export default Header;