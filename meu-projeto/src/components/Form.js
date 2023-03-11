function Form (){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('Cadastrou o usuário!')
    }
    return (
        <div>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label ></label>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="password" value="Digíte a sua senha."/>
                </div>
                <div>
                    <input type="submit" value="Cadastro"/>
                </div>
            </form>
        </div>
    )
}
export default Form