import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {

    const { state, setState } = useContext(DataContext)
    const { number, text, setNumber, setText } = useContext(AppContext)

    const addNumber = (n) => {
        setState({
            ...state,
            number: n
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercicio #01" /> 
            <div className="center"></div>
            <span className="text">{state.text}</span>
            <span className="text">{state.number}</span>

            <div>
                <button className="btn" onClick={() => addNumber(state.number - 1)}>-1</button>
                <button className="btn" onClick={() => addNumber(state.number + 1)}>+1</button>
            </div>


            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number-1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(number+1)}>+1</button>
                </div>


                <span className="text">{text}</span>
                <input type="text"
                    className="input"
                    value={text}
                    onChange={e => setText(e.target.value)} />
            </div>

        </div>


    )
}

export default UseContext
