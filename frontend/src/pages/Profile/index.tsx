import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconPower from "../../assets/IconPower";
import IconTrash from "../../assets/IconTrash";
import LogoImg from "../../assets/logo";

interface IncidentProps {
  id: string;
  title: string;
  description: string;
  value: number;
}

export default function ProfilePage() {
  const [ongName, setOngName] = useState("Ongname Teste");
  const [ongId, setOngId] = useState("12345");
  const [incidents, setIncidets] = useState<IncidentProps[]>([
    { id: "1", title: "teste", description: "teste de descpi", value: 100 },
    { id: "2", title: "teste", description: "teste de descpi", value: 100 },
  ]);

  const handleLogout = () => {};
  const handleDeleteIncident = (id:string) => {};

  return (
    <ProfileContainer>
      <header>
        <LogoImg
          color_primary="#e02041"
          color_secondary="#41414D"
          width="144"
          height="60"
        />
        <span>
          Bem vinda, {ongName}, {ongId}
        </span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout} type="button">
          <IconPower />
        </button>
      </header>

      <h1> Casos Cadastrados</h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(incident.value)}
            </p>
           
              <button
                onClick={() => handleDeleteIncident(incident.id)}
                type="button"
              >
                <IconTrash size={'24'} color="#a8a8b3" />
              </button> 
          </li>
        ))}
      </ul>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
  header {
    display: flex;
    align-items: center;

    span {
      font-size: 20px;
      margin-left: 24px;
    }
    a {
      width: 260px;
      margin-left: auto;
      margin-top: 0;
    }

    button {
      height: 60px;
      width: 60px;
      border-radius: 8px;
      border: 2px solid #dcdce6;
      background: transparent;
      margin-left: 16px;
      transition: border-color 0.2s;
      :hover {
        border-color: #999;
      }
    }
    .button {
      height: 60px;
      background-color: #e02041;
      border: 0;
      border-radius: 8px;
      color: #fff;
      font-weight: 700;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      font-size: 18px;
      line-height: 60px;
      transition: filter 0.2s;
      :hover {
        filter: brightness(90%);
      }
    }
  }

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;
    li {
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      position: relative;
      strong {
        display: block;
        margin-bottom: 16px;
        color: #41414d;
      }
      p + strong {
        margin-top: 32px;
      }
      p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
      }
      button {
        background: #fff;
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;
        :hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
