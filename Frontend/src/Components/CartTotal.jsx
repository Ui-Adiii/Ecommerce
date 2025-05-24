import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
const CartTotal = () => {
  const{getCartAmount,currency,delivery_fee}=useContext(ShopContext);

  return (
    <div className='w-full'>
      <div className='text-2x'>
        <Title text1={'CART'} text2={'TOTALS'}/>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <div className='flex justify-between'>
          <p>SubTotal</p>
          <p>{currency}{getCartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency}{delivery_fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency}{getCartAmount() === 0?0:getCartAmount()+delivery_fee}</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal