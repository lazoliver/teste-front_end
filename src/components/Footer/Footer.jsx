import "./Footer.css";

import Ebit from "../../assets/images/selo_ebit.svg";
import Encrypt from "../../assets/images/encrypt.svg";
import ReclameAqui from "../../assets/images/reclameaqui.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <section>
          <h2>Institucionais</h2>
          <div>
            <ul>
              <li>
                <a href="/missao">Missão</a>
              </li>
              <li>
                <a href="/quem-somos">Quem Somos</a>
              </li>
              <li>
                <a href="/politica-de-privacidade">Política de Privacidade</a>
              </li>
              <li>
                <a href="/politica-de-troca-e-devolucao">
                Política de Troca e Devolução
              </a>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Navegação</h2>
          <div>
            <ul>
              <li>
                <a href="/meu-cadastro">Meu Cadastro</a>
              </li>
              <li>
                <a href="/meus-pedidos">Meus Pedidos</a>
              </li>
              <li>
                <a href="/fale-conosco">Fale Conosco</a>
              </li>
            </ul>
          </div>
        </section>
        <section className="stamps">
          <img src={Ebit} alt="Selo - Prêmio Ebit Excelente" />
          <img src={Encrypt} alt="Selo - Let's Encrypt" />
          <img src={ReclameAqui} alt="Selo - RA1000 Reclame Aqui" />
        </section>
      </div>
    </footer>
  );
}
