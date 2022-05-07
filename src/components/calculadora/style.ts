import styled from "styled-components";


export const Container = styled.div`

    margin:2rem auto ;
    max-width:25rem ;
    text-align:center ;
    
    h1{
        font-size: 3rem ;
        border-bottom:1px solid #444 ;
        padding-bottom:1rem ;
    }    
    

`
export const AreaCalculadora = styled.div`

    margin:3rem auto;
    max-width: 18rem;
    height:20rem ;
    padding:10px ;
    background-color:black ;
    border-radius: 10px ;

    input{
        width:15rem ;
        height:2rem ;
        padding:5px ;
        border:1px solid #444 ;
        background-color:transparent ;
        color:white ;
        outline:0 ;
        margin-bottom:1.4rem ;
        border-radius:10px ;
        text-align:right ;
        font-size:2rem ;
        -webkit-appearance: none;
        -moz-appearance: textfield;
   appearance: textfield;
}
`
export const Areabutton = styled.div`

button{
    width:3rem ;
    height:3rem ;
    border-radius:25px ;
    margin-bottom:0.3rem ;
    border: 0 ;
    font-size: 1.4rem ;
    background-color:white ;
    :hover{
        background-color:#B0BEA9 ;
    }
}

.zeroo{
    grid-area:zeroo ;
    width:7.6rem ;
     ;
}
.ponto{
    grid-area:ponto ;
}
.igual{
    height:100px ;
}

display:grid ;
gap:0.5rem;
grid-template-columns:1fr 1fr 1fr 1fr ;
grid-template-rows: 5px 5px 4px 1px 5px  ;
grid-template-areas: "zeroo zeroo ponto" ;



` 