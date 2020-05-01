import React, { Component } from 'react';
import './comp.scss';
import saitama from './saitama.png';

class Inicio extends Component {
    render() {
        return (
            <div className="Corpo">
                <header id="cabecalho_container">
                    <div id="cabecalho_content">
                        <p id="logo">Gritto</p>
                        <ul id="ul_container">
                            <li id="config"><a href="#">Configuração</a></li>
                            <li><a href="#">Menus</a></li>
                        </ul>
                    </div>
                </header>

                <section>
                    <div id="performace_container">
                        <img src={saitama} id="performace"></img>

                    </div>

                </section>

                <footer>



                </footer>

            </div>
        );
    }
} export default Inicio;

