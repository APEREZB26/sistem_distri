import "../../css/logForm.css";
import { Header } from "../header/Header";
export const RegForm = () => {
  return (
    <div>
      <div className="bodyLog">
        <div className="formBox">
          <div className="formTitle">
            <p>Únete</p>
          </div>
          <p className="title">Ingrese su dirección de correo electrónico y contraseña para acceder.</p>
          <div className="formContent">
            <form method="POST">
              Nombre
              <input type="text"/>
              Apellido
              <input type="text"/>
              Teléfono
              <input type="text"/>
              DNI
              <input type="text"/>
              Dirección
              <input type="text"/>
              Contraseña
              <input type="password"/>
              <input type="submit" value="Únete" />
              <div>
                <p>¿Ya tienes cuenta?<a> Inicia sesión</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
