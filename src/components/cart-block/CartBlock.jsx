import React from 'react';
import { BiCartAlt } from 'react-icons/bi';

import './cartBlock.css';

const CartBlock = () => {
  return (
    <div className='cart-block'>
      <BiCartAlt size={25} className='cart-block__icon' />
      <span className='cart-block__total-priсe'>2351грн </span>
    </div>
  );
};

export default CartBlock;
