import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [isPar, setPar] = useState(false)

    useEffect(() => {
        setFatorial(calcFatorial(number))
        setPar(number % 2 === 0)
    }, [number])

    useEffect(() => {
        if (fatorial > 10000000) {
            document.title = 'Fatorial Gigante'
        }
    }, [fatorial])



    function calcFatorial(n) {
        if (n < 0) return -1
        if (n === 0) return 1
        return calcFatorial(n - 1) * n
    }

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <div>
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial}</span>
            </div>
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <input type="number"
                    className="input"
                    value={number}
                    onChange={(e) => setNumber(+e.target.value)} />
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{isPar ? 'Par' : 'Ímpar'}</span>
                </div>
            </div>

        </div>
    )
}

export default UseEffect
