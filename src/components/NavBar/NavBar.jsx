function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <h4>Logo Mi Tienda</h4>
          </a>
        </li>
        <li>
          <a href="/">Letras</a>
        </li>
        <li>
          <a href="/">Lonas</a>
        </li>
        <li>
          <a href="/">Vinilos</a>
        </li>
      </ul>
      {/* <CartWidget></CartWidget> */}
      <span>🛒</span>
    </nav>
  );
}

export default NavBar;
