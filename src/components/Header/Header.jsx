import "./Header.css";

import Logo from "../../assets/logo.svg";
import LogoMobile from "../../assets/mobile_logo.svg";
import Cart from "../../assets/cart.svg";
import CartCounter from "../../assets/cart_counter.svg";
import SearchIcon from "../../assets/search_icon.svg";

export default function Header() {
  return (
    <header className="header">
      <section className="logo">
        <a href="/" aria-label="Electrolux - Página Inicial">
          <picture>
            <source media="(min-width: 769px)" srcSet={Logo} alt="Electrolux" />
            <img src={LogoMobile} alt="Electrolux Mobile" />
          </picture>
        </a>
      </section>
      <section className="cart">
        <a href="/carrinho">
          <img src={Cart} alt="Ícone do Carrinho" height={18} width={18} />
        </a>
        <a href="/carrinho">
          <img
            src={CartCounter}
            alt="Contador de itens do carrinho"
            height={15}
            width={14}
          />
        </a>
      </section>
      <section className="search">
        <input type="text" placeholder="O que está procurando?" />
        <button type="submit">
          <img src={SearchIcon} alt="Pesquisar" />
        </button>
      </section>
    </header>
  );
}
