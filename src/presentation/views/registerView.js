/*
 * Register View
 *
 * Responsabilidad:
 * - Mostrar la interfaz de registro.
 * - Capturar las acciones del usuario.
 * - Informar esas acciones al Presenter.
 *
 * NO contiene lógica de registro.
 */

export function showRegisterView(container, presenter) { 
    container.innerHTML = `
        <section class="auth-container">
            <div class="auth-card">

                <header class="auth-header">
                    <h1>Crear cuenta</h1>
                    <p>Regístrate para comenzar</p>
                </header> 

                <form id="register-form" class="auth-form">

                 <div class="form-group">
                        <label for="register-institucion">
                            Nombre institucion
                        </label>
                           <div class="form-group">
                        <label for="indique-su-institucion">
                        indique su institucion
                        </label>
                        <select id="indique-su-institucion" name="indique_su_institucion" required>
                            <option value="">Seleccione un tipo</option>
                            <option value="institucion educativa san jeronimo">institucion educativa san jeronimo</option>
                            <option value="institucion educativa riosucio">institucion educativa riosucio</option>
                            <option value="institucion educativa san lorenzo">institucion educativa san lorenzo</option>
                            <option value="otro">otro</option>
                            >
                          </selelect>
                        
                    </div>

                    <div class="form-group">
                        <label for="register-name">
                            Nombre
                        </label>

                        <input
                            type="text"
                            id="register-name"
                            name="name"
                            placeholder="Ingrese su nombre"
                            required
                        >
                    </div>

                    
                    <div class="form-group">
                        <label for="register-tipo de usuario">
                        tipo de usuario
                        </label>
                        <select id="register-tipo-usuario" name="tipo_de_usuario" required>
        <option value="">Seleccione un tipo</option>
        <option value="profesora">profesora / profesor</option>
        <option value="estudiante">estudiante</option>
        <option value="rector">rector</option>
                  >
                 </select>
              </div>
    


                            <div class="form-group">
                        <label for="tipo_genero">
                        tipo_genero
                        </label>
                        <select id="tipo_genero" name="tipo_genero" required>
        <option value="">Seleccione un tipo</option>
        <option value="femenino">femenino</option>
        <option value="masculino">masculino</option>
    </select>
</div>

                    <div class="form-group">
                        <label for="register-email">
                            Correo electrónico
                        </label>

                        <input
                            type="email"
                            id="register-email"
                            name="email"
                            placeholder="correo@ejemplo.com"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label for="register-password">
                            Contraseña
                        </label>

                        <input
                            type="password"
                            id="register-password"
                            name="password"
                            placeholder="Crea una contraseña"
                            required
                        >
                    </div>
                    <div class="form-group">
    <label>
        <input type="checkbox" id="activo" name="activo" checked>
        Activo
    </label>
</div>                    


                    <button
                        type="submit"
                        class="button button-primary"
                    >
                        Crear cuenta
                    </button>  

                </form>

                <div class="auth-footer">

                    <p>¿Ya tienes una cuenta?</p>

                    <button
                        id="show-login"
                        class="btn btn-success"
                        type="btn btn-success"
                    >
                        Iniciar sesión
                    </button>

                </div>

                <p
                    id="register-message"
                    class="form-message"
                ></p>

            </div>
    

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body"
      <p><strong> nombre institucion</strong><spam id"confirmIE"> </spam> </p>
      <p><strong> name</strong><spam id"confirmIe"> </spam> </p>
      <p><strong> tipo_de_usuario</strong><spam id"confirmusuario> </spam> </p>
      <p><strong> tipo_genero</strong><spam id"confirmgenero"> </spam> </p>
      <p><strong> email</strong><spam id"confirmemail"> </spam> </p>
      <p><strong> password</strong><spam id"confirmpassword"> </spam> </p>
      <p><strong> activo</strong><spam id"confirmactivo"> </spam> </p>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
</section>
    `;
    const registerForm =
        document.getElementById("register-form");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);
        const modaelElemnto = document.getElementById("staticBackdrop");
        const modal = new bootstrap.Modal(modaelElemnto);
        const userData = {
            
            indique_su_institucion: formData.get("indique_su_institucion"),
            name: formData.get("name"),
            tipo_de_usuario: formData.get("tipo_de_usuario"),
            tipo_genero: formData.get("tipo_genero"),
            email: formData.get("email"),
            password: formData.get("password"),
            activo: formData.get("activo"),
            

        };

        document.getElementById("confirmIE").textContent=userData.indique_su_institucion;
        document.getElementById("confirnombre").textContent=userData.name;
        document.getElementById("confirmususario").textContent=userData.tipo_de_usuario;
        document.getElementById("confirmgenero").textContent=userData.tipo_genero;
        document.getElementById("confirmemail").textContent=userData.email;
        document.getElementById("confirmcontraseña").textContent=userData = *****;
        document.getElementById("confirmestado").textContent=userData.activo;
        
        registerForm.dataset.userData =JSON.stringify(user.Data);

        modal.show();


    });
    document.getElementById("show-login");

    const loginButton =
        document.getElementById("show-login");

    loginButton.addEventListener("click", () => {
        presenter.showLogin();
    });



export function showRegisterMessage(message) {
    const messageElement =
        document.getElementById("register-message");

    if (messageElement) {
          messageElement.container.innerHTML = ` 
          <div class="alert alert-success" role="alert">
           A simple success alert—check it out!
        </div>


        }
}
