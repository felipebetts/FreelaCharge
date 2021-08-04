import { Flex, MainContainer, Stripe } from "../styles/containers"
import { Parag, Title1, Title3, Title4 } from "../styles/text"
import Card from '../components/Card'
import Input from '../components/Input'
import Button from '../components/Button'
import { useState } from "react"
import { scrap } from "../../services/scrapper"

const Main = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [job, setJob] = useState('')

    return (
        <MainContainer>
            {/* <Flex
                width='100%'
                justifyContent='space-evenly'
                wrap='wrap'
                > */}
            <Flex
                padding='1rem 0 0 5%'
                column
                justifyContent='flex-start'
                alignItems='flex-start'
            // wrap='wrap'
            >
                <Title1>
                    Freela Charge
                </Title1>
                <Title4>
                    Quanto cobrar por hora em um freela?
                </Title4>
            </Flex>
            <Flex
                margin='2rem 0'
                width='100%'>
                <Card
                    width='100%'
                    maxWidth='400px'
                    padding='1rem'
                >
                    <Title3>
                        Descubra a média do valor/hora de profissionais do mercado!
                    </Title3>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            setIsLoading(!isLoading)
                            scrap(job)
                        }}
                    >
                        <Input
                            label='Profissão'
                            placeholder='Insira o cargo desejado aqui'
                            value={job}
                            onChange={e => setJob(e.target.value)}
                        />
                        <Flex
                            margin= '2rem 0 1rem'
                        >
                            <Button
                                fullWidth
                                type='submit'
                                fontSize='1.3rem'
                                isLoading={isLoading}
                            >   
                                Buscar
                            </Button>
                        </Flex>
                    </form>
                </Card>
            </Flex>
            {/* <Flex
                column
            // justifyContent='flex-start'
            // alignItems='flex-start'
            >
                <Card
                    maxWidth='600px'

                >
                    <Parag>
                        No início da carreira, pode ser um pouco difícil definir quanto cobrar por hora como trabalhador freelancer.
                    </Parag>
                    <Parag>
                        Por isso, o FreelaCharge te ajuda dando uma média aproximada do valor/hora dos profissionais mais bem avaliados em plataformas de trabalho freelancer como a Workana.
                    </Parag>
                    <Parag>
                        Assim, você pode ter uma noção do valor/hora cobrado no mercado da sua profissão
                    </Parag>
                </Card>
            </Flex> */}
            {/* </Flex> */}
        </MainContainer>
    )
}

export default Main