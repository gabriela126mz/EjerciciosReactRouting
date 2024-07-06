
function Footer() {
    return (
      <>
      <footer className="footer" style={{border:"3px solid black"}}>
        <div className="footer-content">
          <p>Información de contacto:</p>
          <ul>
            <li>Teléfono: 123-456-789</li>
            <li>Email: info@gmail.com</li>
            <li>Dirección: Calle Ficticia,123</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>Derechos de autor &copy; 2023 Tu Empresa</p>
        </div>
      </footer>
      </>
    );
}

export default Footer;
