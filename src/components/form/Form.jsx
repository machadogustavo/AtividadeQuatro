import React, { useState } from "react"

const Form = () => {

    const [valorE,inputE] = useState("")
    const [valorG,inputG] = useState("")
    
    function Submit(event) {
        event.preventDefault()
        console.log('Valor Etanol ', valorE);
        console.log('Valor Gasolina ', valorG);
    }

    function SetarValorE(event) {
        inputE(event.target.value)
    }

    function SetarValorG(event) {
        inputG(event.target.value)
    }

   function Calcular(){

        console.log(valorE, valorG);

        const calculo = (parseFloat(valorE) / parseFloat(valorG)).toFixed(2)
        console.log(calculo);

        if(calculo <= 0.7) {
            return (`O cálculo deu: ${calculo} , sendo assim é mais vantajoso abastecer com álcool.` );
        }

        else if(calculo >= 0.7) {
            return (`O cálculo deu: ${calculo} , sendo assim é mais vantajoso abastecer com gasolina.` );
        }

    
   }
    return(
        <form onSubmit={Submit}>


            <label>Preço - litro etanol (R$):</label>
            <input required={true} type="number" pattern="[0-9]+([,\.][0-9]+)?" min="0" step="any" id="inputE" name="inputE" value={valorE} onChange={SetarValorE}/>


            <label>Preço - litro gasolina (R$):</label>
            <input required={true} type="number" pattern="[0-9]+([,\.][0-9]+)?" min="0" step="any" id="inputG" name="inputG" value={valorG} onChange={SetarValorG}/>


            {/* <input type="submit" value="Calcular" name="BotaoCalcular" id="BotaoCalcular" onClick={Calcular}/> */}


            <label id="Result">Resultado:  {Calcular()}</label>


        </form>
    )
}

export default Form
