import "./Footer.css";

import Ebit from "../../assets/selo_ebit.svg";
import Encrypt from "../../assets/encrypt.svg";
import ReclameAqui from "../../assets/reclameaqui.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <section>
          <h2>Institucionais</h2>
          <div>
            <ul>
              <a href="/missao">Missão</a>
              <a href="/quem-somos">Quem Somos</a>
              <a href="/politica-de-privacidade">Política de Privacidade</a>
              <a href="/politica-de-troca-e-devolucao">
                Política de Troca e Devolução
              </a>
            </ul>
          </div>
        </section>
        <section>
          <h2>Navegação</h2>
          <div>
            <ul>
              <a href="/meu-cadastro">Meu Cadastro</a>
              <a href="/meus-pedidos">Meus Pedidos</a>
              <a href="/fale-conosco">Fale Conosco</a>
            </ul>
          </div>
        </section>
        <section className="stamps">
          <img src={Ebit} alt="" />
          <img src={Encrypt} alt="" />
          <img src={ReclameAqui} alt="" />
        </section>
      </div>
    </footer>
  );
}
