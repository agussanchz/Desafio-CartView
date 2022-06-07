import React from 'react'
import { Link } from 'react-router-dom' 
export default function Cart() {
  return (
    <div>
      <h2 className='title__carrito'>Tu carrito esta vacio :(</h2>

      <div className='container-cart'>
        <Link className='nav__link'to={'/products'}>
          <input type="button" value="Comprar productos"/>
        </Link>
      </div>

    </div>
  )
}
