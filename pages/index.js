import {useState} from 'react'

function Contador() {

    const [contador, setState] = useState(1)

    function adcionar(){
        setState(contador + 1)
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adcionar}>Contador</button>
        </div>
    )
}


function Pagina() {
    return <Contador />
}

export default Pagina