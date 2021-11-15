import { createGlobalStyle } from 'styled-components'



export const GlobalStyle = createGlobalStyle`

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
    
    :root{
        --red: #e52e4d;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --green: #33cc95;
        --shape: #F8F8F8;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --background: #f0f2f5;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html{
        @media(max-width: 1080px){
            font-size:93.75% /* 15px  */
        }
        @media(max-width: 1080px){
            font-size:87.5%        /* 14px */
        }
    }

    body{
        background: var(--backgroud);
         -webkit-font-smoothing: antialiased;  /*  Deixar as fontes mais nitidas */
    }

    button{ 
        cursor: pointer;

    }

    [disabled]{
        opating: 0.6;
        cursor: not-allowed;
    }

    body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }



  .react-modal-content{
      width: 100%;
      max-width: 576px;
      background: var(--background);
      padding: 3rem;
      position: relative;
      border-radius: 0.24rem;
  }
  .react-modal-overlay{
      background: rgba(0,0,0,0.5);

      position: fixed;
      top:0;
      bottom: 0;
      right: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;
  }



  .react-modal-close{
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      border: 0;
      background: transparent;

      transition: filter 0.2s;

      &:hover {
          filter: brightness(0.8);
      }
  }
`