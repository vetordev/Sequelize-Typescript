import React from 'react';
import { FiPlus } from 'react-icons/fi';

import Header from '../../components/Header';

import { Container, Content, Agency, Projects, Devs, TitleSession, AddButton } from './styles';

import img_agency from '../../assets/rocketseat-logo.png';

export default function Profile() {
  return (
    <>
      <Header page="profile" />
      <Container>
        <Content>
          <Agency>
            <img src={img_agency} alt=""/>

            <div id="infos-agency">
              <h2>Rocketseat</h2>
              <p><span>E-mail: </span>oi@rocketseat.com.br</p>
              <span id="edit-infos">Editar informações</span>
            </div>
          </Agency>

          <Projects>
            <header>
              <TitleSession>Projetos</TitleSession>
              <AddButton>
                <FiPlus size={28} color="#fff" />
              </AddButton>
            </header>
          </Projects>

          <Devs></Devs>
        </Content>
      </Container>
    </>
  );
}
