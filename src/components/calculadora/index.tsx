import { useState } from "react";
import { Areabutton, AreaCalculadora, Container } from "./style";


export function Calculadora(){

    const [num, setNum] = useState(0)
    const [oldnum, setOldnum] = useState(0)
    const [operator, setOperator] = useState()

    function percerntNum(e:any){
        setNum(num / (e.target.value))
    }

    function numInput(e:any){
        
       if(num == 0){  
            setNum(e.target.value)
        }else{
            
            setNum(num + e.target.value)
        }
    }
    
    function numInput2(e:any){
        
        if(num == 0){  
            setNum(e.target.value)
        }else{
            setNum(e.target.value)
        }
    }
    function clearInputClick(){
        setNum(NaN);
    }
    function clearInput(){
        setNum(0);
    }

    function calculete(e:any){
        console.log(operator)
        console.log(oldnum)
        console.log(num)
        if(operator == "+"){
            setNum(Number(num) + Number(oldnum))
        }else if(operator == "-"){
            setNum(oldnum - num)
        }else if(operator == "/"){
            setNum(oldnum / num)
        }else if(operator == "X"){
            setNum(oldnum * num)
        }
        
    }

    function operatorHandle(e:any){
        setOperator(e.target.value)
        setOldnum(num)
        setNum(0)
    }
    
    return(
        <Container>
            <h1>Calculadora</h1>
            <AreaCalculadora>
            <input
             type="number"
             placeholder="0"
             onClick={clearInputClick}
            value={num}
            onChange={numInput2}
            />
            <Areabutton>
            <button onClick={clearInput}>CE</button>
            <button onClick={percerntNum} value={100}>%</button>
            <button onClick={operatorHandle} value={"+"}>+</button>
            <button onClick={operatorHandle} value={"-"}>-</button>
            </Areabutton>
            <Areabutton>
            <button onClick={numInput} value={1}>1</button>
            <button onClick={numInput} value={2}>2</button>
            <button onClick={numInput} value={3}>3</button>
            <button onClick={operatorHandle} value={"/"}>/</button>
            </Areabutton>
            <Areabutton>
            <button onClick={numInput} value={4}>4</button>
            <button onClick={numInput} value={5}>5</button>
            <button onClick={numInput} value={6}>6</button>
            <button onClick={operatorHandle} value={"X"}>X</button>
            </Areabutton>
            <Areabutton>
            <button onClick={numInput} value={7}>7</button>
            <button onClick={numInput} value={8}>8</button>
            <button onClick={numInput} value={9}>9</button>
            <button className="igual" onClick={calculete} value={"="}>=</button>
            </Areabutton>
            <Areabutton>
            <button className="zeroo" onClick={numInput} value={0}>0</button>
            <button className="ponto" onClick={numInput} value={","}>,</button>           
            </Areabutton>
            </AreaCalculadora>
        </Container>
    )
}


