import React from 'react';
import styles from '../styles/page.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.avatar}></div>
        <ul>
          <li>
            <h6 className={styles.heading}>Endereço</h6>
            <p>Curitiba, Paraná<br />Brasil</p>
          </li>
          <li>
            <h6 className={styles.heading}>Telefone</h6>
            <p>+55 41 98867-9615</p>
          </li>
          <li>
            <h6 className={styles.heading}>E-mail</h6>
            <p>madruga.fabricio@hotmail.com</p>
          </li>
          <li>
            <h6 className={styles.heading}>Nacionalidade</h6>
            <p>Brasileiro</p>
          </li>
          <li>
            <h6 className={styles.heading}>Data de Nascimento</h6>
            <p>21/03/1994</p>
          </li>
          <li>
            <h6 className={styles.heading}>Gênero</h6>
            <p>Masculino</p>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <h1>Fabricio Madruga</h1>
        <div className={styles.section}>
          <h6 className={styles.title} data-backdrop-text="Sobre mim">Sobre mim</h6>
          <p>Sou desenvolvedor full-stack com mais de 10 anos de experiência. Apaixonado por tecnologia desde adolescente. Comecei a estudar computação e programação aos 15 anos e aos 17 comecei a trabalhar como desenvolvedor em agências digitais.</p>
        </div>

        <div className={styles.section}>
          <h6 className={styles.title} data-backdrop-text="Experiências">Experiências</h6>
          <ul className={styles.timeline}>
            <li>
              <span className={styles.date}>2022 - Presente</span>
              <h5>Role title</h5>
              <p className={styles.company}>Company name</p>
              <p>Description</p>
            </li>
            <li>
              <span className={styles.date}>2022 - Presente</span>
              <h5>Role title</h5>
              <p className={styles.company}>Company name</p>
              <p>Description</p>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h6 className={styles.title} data-backdrop-text="Educação">Educação</h6>
          <ul className={styles.timeline}>
            <li>
              <span className={styles.date}>2022 - 2022</span>
              <h5>School</h5>
              <p className={styles.company}>Company name</p>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h6 className={styles.title} data-backdrop-text="Habilidades">Habilidades</h6>
          <p>Sou desenvolvedor full-stack com mais de 10 anos de experiência. Apaixonado por tecnologia desde adolescente. Comecei a estudar computação e programação aos 15 anos e aos 17 comecei a trabalhar como desenvolvedor em agências digitais.</p>
        </div>
      </div>
    </div>);
}

export default Home;
