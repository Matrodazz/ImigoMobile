import { Title, DivComp1, Input, Button, Link } from "./StyleLogin"

export default function Login() {

    return(
    <DivComp1>
        <Title>IMIGO</Title><br/>
      <Input
        placeholder="Usuário"
        type="text"
      /><br/>
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        type="text"
      /><br/>

        <Button>Acessar</Button><br/>
        <Link href="#">Criar conta</Link>
    </DivComp1>
    )
}