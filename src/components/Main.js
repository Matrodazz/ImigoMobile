import { Brand, DivComp1, Input, InputContainer, Label, HintContainer, Container } from "./StyleMain"

export default function Main() {
    return(
        <DivComp1>
            <Brand>IMIGO</Brand><br/>
            <Label>Chat</Label>
            <InputContainer>
                <Input placeholder="Faça uma pergunta!"/>
            </InputContainer><br/>

            <Label>Seus agendamentos</Label>
            <Container>

            </Container><br/>

            <HintContainer>
                <h3>Dica!</h3>
                <p>A garantia é um direito seu! Fique ligado 
                    sobre as informações do produto antes
                    de realizar uma compra!</p>
            </HintContainer>

        </DivComp1>
    )
}