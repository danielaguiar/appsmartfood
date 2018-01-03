export abstract class AppAbstractBaseComponent {

    public paginas: any = {
        home: 'HomePage',
        categorias: 'CategoriasPage',
        signup : 'SignupPage'
    };


    frmLogin:any = {
        label: {
            'login': 'Login',
            'password':'Senha'
        },
        btn:{
            'enter':'Entar',
            'register': 'Registre-se'
        }
    }
}