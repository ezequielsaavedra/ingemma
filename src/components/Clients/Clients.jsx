import "./Clients.css";
import logoLauro from "../../img/logoLauro.png";
import logoHectorDominguez from "../../img/logoHectorDominguez.png";

function Clients() {
  return (
    <div className="containerClients">
      <div className="row rowClients">
        <div className="col-xl-4 col-md-4 col-sm-4 colClients">
          <h2>Nuestros clientes</h2>
        </div>
        <div className="col-xl-4 col-md-4 col-sm-4 colClients">
          <div className="col">
            <img src={logoLauro} alt="logo LAURO" width={165} height={154} />
          </div>
          <div className="col">
            <img
              src={logoHectorDominguez}
              alt="logo Hector Dominguez"
              width={200}
              height={135}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
