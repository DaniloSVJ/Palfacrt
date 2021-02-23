import React, {
    FormEvent,
    useState,
    useEffect,
    useCallback,
    useRef,
} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import api from '../../../services/api'
import Table from '../../../components/tabela/index'

import { Div } from './styles'
import imgFormaPagamento from '../../../image/formaPagaEdit.png'
import imgCartaoDebito from '../../../image/CadastroFormaPagamento/debito.png'
import imgCartaoCredito from '../../../image/CadastroFormaPagamento/credito.png'
import imgDinheiro from '../../../image/CadastroFormaPagamento/dinheiro.png'
import imgPix from '../../../image/CadastroFormaPagamento/pix.png'
import imgCheque from '../../../image/CadastroFormaPagamento/cheque.png'


import Menu from '../../../components/menu'

const Cadastro: React.FC = () => {
    const [rdDinheiro, setRdDinheiro] = useState(false)
    const [rdCartaoCredito, setRdCartaoCredito] = useState(false)
    const [rdCartaoDebito, setRdCartaoDebito] = useState(false)
    const [rdPix, setRdPix] = useState(false)
    const [rdCheque, setRdCheque] = useState(false)
    const [inputOutro, setInputOutro] = useState('')


    useEffect(() => {



    }, [rdCartaoCredito]);

    const cadastrar = useCallback(() => {

        async function cadastra(): Promise<void> {
            if (rdDinheiro === true) {
                await api.post('formapagamento', {
                    nome: 'Dinheiro'
                })
            }
            if (rdCartaoCredito === true) {
                await api.post('formapagamento', {
                    nome: 'Cartão de Crédito'
                })
            }
            if (rdCartaoDebito === true) {
                await api.post('formapagamento', {
                    nome: 'Cartão de Débito'
                })
            }
            if (rdPix === true) {
                await api.post('formapagamento', {
                    nome: 'Pix'
                })
            }
            if (rdCheque === true) {
                await api.post('formapagamento', {
                    nome: 'Cheque'
                })
            }
            if (inputOutro !== "") {
                await await api.post('formapagamento', {
                    nome: inputOutro
                })
            }
        }
        cadastra()

        console.log("vai")

    }, [rdCartaoCredito, rdCartaoDebito, rdCheque, rdPix, rdDinheiro, inputOutro])
    return (
        <>
            <Menu />
            <Div id="login-box">

                <form >
                    <div id="conteudo">
                        <div><img src={imgFormaPagamento} alt="Forma de Pagamento" /></div>

                        <div>

                            <p className="titulo">Selecione:</p>
                            <div id="formasSelecao">

                                <input onChange={e => setRdDinheiro(e.target.checked)} className="checbox" type="checkbox" name="dinheiro" alt="dinheiro" />
                                <img className="iconeFP" src={imgDinheiro} alt="Dinheiro" />

                                <input onChange={e => setRdCartaoCredito(e.target.checked)} className="checbox" type="checkbox" name="cartaocredito" />
                                <img className="iconeFP" src={imgCartaoCredito} alt="Cartão de Crédito" />

                                <input onChange={e => setRdCartaoDebito(e.target.checked)} className="checbox" type="checkbox" name="cartaodebito" />
                                <img className="iconeFP" src={imgCartaoDebito} alt="Cartão de Débito" />

                                <input onChange={e => setRdPix(e.target.checked)} className="checbox" type="checkbox" name="pix" />
                                <img className="iconeFP" src={imgPix} alt="Pix" />

                                <input onChange={e => setRdCheque(e.target.checked)} className="checbox" type="checkbox" name="cheque" />
                                <img className="iconeFP" src={imgCheque} alt="Cheque" />
                            </div>
                            <p className="titulo">Ou Cadastre:</p>
                            <input type="text" onChange={e => setInputOutro(e.target.value)} />
                            <p><button onClick={cadastrar} type="button">Salvar</button> </p>

                            <p className="titulo">Dados Cadastrados:</p>

                            <div id="divinfoTabela">
                                <div>
                                    <div>
                                        <Table>
                                            <tr>
                                                <th>id</th>
                                                <th>Forma Pagamentos</th>

                                            </tr>
                                            <tr>
                                                <td>Jill</td>
                                                <td>Smith</td>

                                            </tr>
                                            <tr>
                                                <td>Eve</td>
                                                <td>Jackson</td>

                                            </tr>
                                            <tr>
                                                <td>Adam</td>
                                                <td>Johnson</td>

                                            </tr>

                                        </Table>
                                    </div>
                                </div>
                                <p>
                                    <button>Remover</button>
                                </p>
                            </div>
                        </div>

                    </div>

                </form>


            </Div>
        </>
    )
}

export default Cadastro