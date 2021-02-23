import React, { useState } from 'react'

import { Header } from './styles'

import logomarca from '../../image/logomarca.png';

const Menu: React.FC = () => {

    const [active, setActive] =useState(false)

    function ativarMenu(){
        if(active===false){
            setActive(true)
        }else{
            setActive(false)
        }
    }

    return (
        <Header>
            <div className="container">
                <img
                    src={logomarca}
                    alt="CRT Sistemas"
                />
                <div className={active ? "menu-section on":"menu-section"} onClick={ativarMenu}>
                    <div className="menu-toggle">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/cadastro">Suporte</a>
                            </li>
                            <li>
                                <a href="/cadastro">Financeiro</a>
                            </li>
                            <li>
                                <a href="/cadastro">Comercial</a>
                            </li>
                            <li>
                                <a href="/cadastro">Minha Conta</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Header>
    )
}

export default Menu