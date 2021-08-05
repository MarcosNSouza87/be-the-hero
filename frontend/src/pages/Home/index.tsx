import { useState } from "react";
import { Link } from "react-router-dom";

import heroesImg from "../../assets/heroes.png";
import IconLogin from "../../assets/IconLogin";
import LogoImg from "../../assets/logo";
import Button from "../../components/Button";
import Input from "../../components/InputText";

import { HomeContainer } from "./styles";

export default function HomePage() {
  const [id, setId] = useState("");

  const handleLogin = () => {};
  return (
    <HomeContainer>
      <section className="form">
        <LogoImg
          color_primary="#e02041"
          color_secondary="#41414D"
          width="300"
          height="150"
        />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <Input
            name="IdUser"
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Button name="btn" className="button" type="submit">
            Entrar
          </Button>

          <Link className="back-link" to="/register">
            <IconLogin />
            Não tenho cadastro
          </Link>
          <br />
          <br />
          <p>v.1.0</p>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </HomeContainer>
  );
}
