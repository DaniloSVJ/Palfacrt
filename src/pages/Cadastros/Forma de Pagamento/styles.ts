import styled from 'styled-components'


export const Div = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);
  *:focus {
    outline: none;
  }
  
  html,
  body {
    height: 100vh;
    font-family: "Source Sans Pro";
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    font-family:Arial, Helvetica, sans-serif;
    }
  
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
 
    width: 100%;
    height: 100%;
    
    border-radius: 2px;
   
    padding:15px;
   
    #conteudo{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

      
    }
   
    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100px;
        
    }
    .iconeFP{ 
        margin-left: auto;
        margin-right: 10px;
        width: 20px;
    }    
   input[type="checkbox"]:checked {
    background-color: red;
    color: red;

    }
    button{
      background-color:#051684;
      color:#fff;
      border: none;
      border-radius: 5px;
      padding: 5px;
    }
    #formasSelecao{
      display:flex;
      flex-direction:row;
     
    }


    .checbox{
        margin-left: 10px;
    }
    
    background-color: rgb(248,245,252);

    .titulo{
        font-size: 15px;
        font-weight:bold;
        color: #483D8B	;

    }

    #divinfoTabela{
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:flex-start;
  }

 @media (max-width: 315px) {

    #formasSelecao{
        display:flex;
        flex-direction:column;
        align-items:center;
       
      }


      .checbox{
        margin-left: 0px;
    }
    
    .iconeFP{ 
        margin-left: 0px;
        margin-right: 0px;
        width: 20px;
    }  
}
`
