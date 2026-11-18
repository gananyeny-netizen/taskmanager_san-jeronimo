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
                        <label for="indique-su-institucion">
                            Indique su institución
                        </label>
                        <select id="indique-su-institucion" name="indique_su_institucion" required>
                            <option value="">Seleccione una institución</option>
                            <option value="institucion educativa san jeronimo">institucion educativa san jeronimo</option>
                            <option value="institucion educativa riosucio">institucion educativa riosucio</option>
                            <option value="institucion educativa san lorenzo">institucion educativa san lorenzo</option>
                            <option value="otro">otro</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="register-name">Nombre</label>
                        <input
                            type="text"
                            id="register-name"
                            name="name"
                            placeholder="Ingrese su nombre"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label for="register-tipo-usuario">Tipo de usuario</label>
                        <select id="register-tipo-usuario" name="tipo_de_usuario" required>
                            <option value="">Seleccione un tipo</option>
                            <option value="profesora">profesora / profesor</option>
                            <option value="estudiante">estudiante</option>
                            <option value="rector">rector</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="tipo_genero">Género</label>
                        <select id="tipo_genero" name="tipo_genero" required>
                            <option value="">Seleccione un tipo</option>
                            <option value="femenino">femenino</option>
                            <option value="masculino">masculino</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="register-email">Correo electrónico</label>
                        <input
                            type="email"
                            id="register-email"
                            name="email"
                            placeholder="correo@ejemplo.com"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label for="register-password">Contraseña</label>
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

                    <button type="submit" class="button button-primary">
                        Crear cuenta
                    </button>

                </form>

                <div class="auth-footer">
                    <p>¿Ya tienes una cuenta?</p>
                    <button id="show-login" class="btn btn-success" type="button">
                        Iniciar sesión
                    </button>
                </div>

                <p id="register-message" class="form-message"></p>

            </div>

            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Confirmar datos</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p><strong>Institución: </strong><span id="confirmIE"></span></p>
                            <p><strong>Nombre: </strong><span id="confirmNombre"></span></p>
                            <p><strong>Tipo de usuario: </strong><span id="confirmUsuario"></span></p>
                            <p><strong>Género: </strong><span id="confirmGenero"></span></p>
                            <p><strong>Email: </strong><span id="confirmEmail"></span></p>
                            <p><strong>Contraseña: </strong><span id="confirmPassword"></span></p>
                              <p><strong>Activo: </strong><span id="confirmActivo"></span></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary" id="confirm-register">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    const registerForm = document.getElementById("register-form");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);
        const modalElemento = document.getElementById("staticBackdrop");
        const modal = new bootstrap.Modal(modalElemento);

        const userData = {
            indique_su_institucion: formData.get("indique_su_institucion"),
            name: formData.get("name"),
            tipo_de_usuario: formData.get("tipo_de_usuario"),
            tipo_genero: formData.get("tipo_genero"),
            email: formData.get("email"),
            password: formData.get("password"),
            activo: registerForm.activo.checked
        };

        document.getElementById("confirmIE").textContent = userData.indique_su_institucion;
        document.getElementById("confirmNombre").textContent = userData.name;
        document.getElementById("confirmUsuario").textContent = userData.tipo_de_usuario;
        document.getElementById("confirmGenero").textContent = userData.tipo_genero;
        document.getElementById("confirmEmail").textContent = userData.email;
        document.getElementById("confirmPassword").textContent = "********";
        document.getElementById("confirmActivo").textContent = userData.activo ? "Sí" : "No";

        registerForm.dataset.userData = JSON.stringify(userData);

        modal.show();
    });

    const loginButton = document.getElementById("show-login");

    loginButton.addEventListener("click", () => {
        presenter.showLogin();
    });
}

export function showRegisterMessage(message) {
    const messageElement = document.getElementById("register-message");

    if (messageElement) {
        messageElement.innerHTML = `
            <div class="alert alert-success" role="alert">
                ${message}
            </div>
        `;
    }
}
