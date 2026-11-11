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

    </select>
</div>
                        
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
                        <select id="register-tipo-usuario" name="tipo_usuario" required>
        <option value="">Seleccione un tipo</option>
        <option value="profesora">profesora / profesor</option>
        <option value="estudiante">estudiante</option>
        <option value="rector">rector</option>
    </select>
</div>
    


                            <div class="form-group">
                        <label for=" genero">
                        tipo de genero
                        </label>
                        <select id="genero" name="tipo_de_genero" required>
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
                        class="button button-link"
                        type="button"
                    >
                        Iniciar sesión
                    </button>

                </div>

                <p
                    id="register-message"
                    class="form-message"
                ></p>

            </div>
        </section>
    `;

    const registerForm =
        document.getElementById("register-form");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);

        const userData = {
            indique_su_institucion: formData.get("indique su institucion"),
            name: formData.get("name"),
            tipo_de_usuario: formData.get("tipo de usuario"),
            genero: formData.get("genero"),
            email: formData.get("email"),
            password: formData.get("password")
        };

        presenter.register(userData);
    });

    const loginButton =
        document.getElementById("show-login");

    loginButton.addEventListener("click", () => {
        presenter.showLogin();
    });
}

export function showRegisterMessage(message) {
    const messageElement =
        document.getElementById("register-message");

    if (messageElement) {
        messageElement.textContent = message;
    }
}