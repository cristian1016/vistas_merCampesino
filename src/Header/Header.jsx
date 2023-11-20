import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <>
            <header>
                <div>
                    <img src="/logo_campesino.png" alt="" />
                    <div className='title_header'>
                        <h1>MERCADO CAMPESINO</h1>
                        <h3>LA MEJOR CALIDAD</h3>
                    </div>
                </div>

                <div>
                    <div className='campana'>
                        <img src="/bell.png" alt="" />
                    </div>

                    <div className='carrito'>
                        <img src="/cart.png" alt="" />
                    </div>
                </div>
            </header>
        </>
    )
}
