const isDeeper = document.currentScript.getAttribute("isDeeper");
let homePath = "./";
if (isDeeper == "true") {
  homePath = "../";
}

const navContainer = document.getElementById("navContainer");
if (navContainer) {
  const style = document.createElement("style");
  style.textContent = `
  nav {
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    background-color: #149fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    z-index: 1000;
  }

  nav h2 {
    color: #fff;
    font-weight: 700;
    text-align: center;
  }
  nav a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
  }
  #navButton {
    position: fixed;
    right: 5px;
    bottom: 5px;
    background-color: #149fff;
    width: 75px;
    height: 75px;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    user-select: none;
  }
  #navbarLinks {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .dropbtn {
    font-family: "Roboto", sans-serif;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
  }
  .dropbtn::after {
    content: "▼";
    display: inline-block;
    margin-left: 5px;
  }
  .dropdown:hover .dropbtn::after {
    content: "▲";
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    left: 150px;
    background-color: #f9f9f9;
    min-width: 160px;
    width: max-content;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .header {
    background-color: #149fff;
    box-shadow: 0 0 10px rgb(255 255 255 / 0.75);
    margin-left: 200px;
    height: 75px;
    font-weight: 700;
    font-size: 24px;
    display: flex;
    align-items:center;
    justify-content:center;
  }
  `;
  document.head.appendChild(style);
  navContainer.innerHTML = `
  <header class="header">
    Polski Związek Wędkarski - Województwo dolnośląskie
  </header>
  <nav id="navbar">
    <div>
      <h2>Nawigacja</h2>
      <div id="navbarLinks">
        <a href="${homePath}strona-glowna.html">Strona głowna</a>
        <a href="${homePath}sprzet-wedkarski.html">Sprzęt wędkarski</a>
        <div class="dropdown">
          <button class="dropbtn">POWIAT WROCŁAWSKI</button>
          <div class="dropdown-content">
            <a href="${homePath}powiaty/wroc-1.html">Koło wędkarskie 122 Astra</a>
            <a href="${homePath}powiaty/wroc-2.html">Koło wędkarskie Ciernik Bolesławiec</a>
            <a href="${homePath}powiaty/wroc-3.html">Koło wędkarskie, Koło nr 41</a>
            <a href="${homePath}powiaty/wroc-4.html">Wędkarskie Centrum Krokodyl</a>
            <a href="${homePath}powiaty/wroc-5.html">Koło PZW nr 109 REKIN</a>
            <a href="${homePath}powiaty/wroc-6.html">Koło PZW nr 116 KAPITAN</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">POWIAT WAŁBRZYSKI</button>
          <div class="dropdown-content">
            <a href="${homePath}powiaty/wal-1.html">Okręg Polskiego Związku Wedkarskiego W Wałbrzychu</a>
            <a href="${homePath}powiaty/wal-2.html">Koło Wałbrzych Lokomotywa</a>
            <a href="${homePath}powiaty/wal-3.html">Koło Wałbrzych THOREZ</a>
            <a href="${homePath}powiaty/wal-4.html">Koło Wałbrzych Zak.Koksownicze</a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <img
        width="125"
        height="125"
        src="https://th.bing.com/th/id/R.c7f5a062d0b2d3abaf53ef224e35dea0?rik=hj731dFAGpIMGA&pid=ImgRaw&r=0"
        alt="logo"
      />
    </div>
  </nav>
  `;
}
