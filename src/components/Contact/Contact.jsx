import "./Contact.css";

function Contact() {
  return (
    <div className="containerContact">
      <form>
        <div className="rowContact1">
          <h2>Contáctanos</h2>
          <div className="row rowContact2">
            <div className="col-xl-4 col-md-8 col-sm-12 colContact">
              <label>Nombre y apellido</label>
              <input
                type="text"
                placeholder="Escribe aqui tu nombre y apellido"
                id="nombre"
              />
            </div>
            <div className="col-xl-4 col-md-8 col-sm-12 colContact">
              <label>Email</label>
              <input
                type="email"
                placeholder="Escribe aqui tu email"
                id="email"
              />
            </div>
          </div>
          <div className="row rowContact2">
            <div className="col-xl-8 col-md-8 col-sm-12 colContact">
              <label>Tu consulta</label>
              <input
                type="text"
                placeholder="Escribe aqui tu consulta"
                id="consulta"
              />
            </div>
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Contact;
