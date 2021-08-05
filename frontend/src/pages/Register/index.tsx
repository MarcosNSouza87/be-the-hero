import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconArrowLeft from "../../assets/IconArrowLeft";
import Logo from "../../assets/logo";
import Button from "../../components/Button";
import { InputContainer } from "../../components/InputText/styles";

export default function RegisterOngPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const handleRegister = () => {};
  return (
    <RegisterContainer>
      <Content>
        <section>
          <Logo
            color_primary="#e02041"
            color_secondary="#41414D"
            width="250"
            height="100"
          />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar
            os casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <IconArrowLeft />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <InputContainer
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputContainer
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputContainer
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <InputContainer
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <InputContainer
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>
          <Button name="btn1" className="button" type="submit">
            Cadastrar
          </Button>
        </form>
      </Content>
    </RegisterContainer>
  );
}

const RegisterContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    width: 100%;
    max-width: 380px;

    h1 {
      margin: 64px 0 32px;
      font-size: 32px;
    }
    p {
      font-size: 18px;
      color: #737380;
      line-height: 32px;
    }
  }
  form {
    width: 100%;
    max-width: 450px;
    gap: 8px;
    input {
      margin-top: 8px;
    }
    div.input-group {
      display: flex;
    }
    div.input-group input + input {
      margin-left: 8px;
    }
  }
`;
