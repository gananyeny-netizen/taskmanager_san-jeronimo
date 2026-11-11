/*
 * User Entity
 *
 * Representa un usuario dentro del dominio
 * de la aplicación.
 *
 * Esta clase NO sabe:
 * - cómo se guarda el usuario
 * - dónde se guarda
 * - cómo funciona Firestore
 * - cómo funciona LocalStorage
 * - cómo funciona la interfaz
 */

export class User {

    constructor({
        id = null,
        indique_institucion,
        name,
        tipo_de_usuario,
        tipo_genero,
        email,
        passwordHash = null,
        activo = activo,
    }) {
        this.id = id;
        this.indique_institucion=indique_institucion;
        this.name = name;
        this.tipo_de_usuario =tipo_de_usuario;
        this.tipo_genero= tipo_genero;
        this.email = email;
        this.passwordHash = passwordHash;
        this.activo = activo;
    }

}