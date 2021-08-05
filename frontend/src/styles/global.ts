import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  *{
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    font: 400 14px Roboto, sans-serif;
    background: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing:antialiased;
  }

  input,button,textarea{
      font:400 18px Roboto,sans-serif;
  }
  button{
      cursor: pointer;
  }
  .back-link{
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: ${(props)=>props.theme.colors.title};
    font-size: 18px;
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.2s;
}
.back-link svg{
    margin-right: 8px;
}

.back-link:hover
{
    opacity: 0.8s;
}

`;
