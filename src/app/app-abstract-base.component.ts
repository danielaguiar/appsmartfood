import { FormGroup } from '@angular/forms';
export abstract class AppAbstractBaseComponent {

    protected formGroup: FormGroup;

    public paginas: any = {
        home: 'HomePage',
        categorias: 'CategoriasPage',
        profile: 'ProfilePage',
        signup: 'SignupPage'
    };


    frmLogin: any = {
        label: {
            'login': 'Login',
            'password': 'Senha'
        },
        btn: {
            'enter': 'Entar',
            'register': 'Registre-se'
        }
    }

    isCampoValido(campo: string) {
        return this.formGroup.controls[campo].dirty && this.formGroup.controls[campo].errors
    }
}