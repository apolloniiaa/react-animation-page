import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    @media(min-width:1700px){
        font-size: 50%;
    }
}

body{
    background: #000000;
    font-family: 'inter', sans-serif;
    overflow-x: hidden;
}


button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: #EDF5E0;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    
    &:hover{
        background-color: #23d997;
        color: #EDF5E0;
    }
    
}

h2{
        font-weight: lighter;
        font-size: 4rem;
    }

    p{
        padding: 3rem 0rem;
    font-size: 1.2rem;
    line-height: 150%;
    }

    h3{
        color:#EDF5E0;
    }
    h2{
      font-size: 3.5rem;
    }

    h4{
    font-weight: bold;
    }

    a{
    font-size: 1.1rem;  
    }
    span{
    font-weight: bold;
    color: #23d997;
    }

p{
padding: 3rem 0;
color: #EDF5E0;
}
`;

export default GlobalStyle;
