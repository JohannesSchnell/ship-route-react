function Element() {
  return (
    <div>
      <h2>toDO</h2>
      <ul>
        <li>maps</li>
        <li>css</li>
        <li>html</li>
      </ul>
    </div>
  );
}

function MainContent() {
  return <h1>hello</h1>;
}

function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="title-img" src="./logo192.png"></img>
        <ul className="nav-items">
          <li> Ships </li>
          <li> About </li>
          <li> Contact </li>
        </ul>
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <small> Made by hans</small>
    </footer>
  );
}

export function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      {/*  <Element /> */}
      <Footer />
    </div>
  );
}
