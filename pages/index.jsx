import { Flex, MainContainer, Stripe } from "../styles/containers"
import { Parag, Title1, Title3, Title4 } from "../styles/text"
import Card from '../components/Card'
import Input from '../components/Input'
import Button from '../components/Button'
import { useState } from "react"
import { scrap } from "../services/scrapper"
import Head from 'next/head'
import { useRouter } from 'next/router'
import { formatQueryString } from "../utils/format"
import useWindowDimensions from "../hooks/useWindowDimensions"
import { breakpoints } from '../utils/breakpoints'
import PageWrapper from '../templates/PageWrapper'

const Main = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [job, setJob] = useState('')
    const [error, setError] = useState(false)

    const router = useRouter()

    const { width } = useWindowDimensions()
    const small = width < breakpoints.sm && width !== 0

    if (small) {
        return (
            <>
                <Head>
                    <title>FreelaCharge</title>
                </Head>
                <PageWrapper>
                    <MainContainer>
                        <Flex
                            column
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
                            <Stripe
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
                                        if (!job || job === '') {
                                            setIsLoading(false)
                                            setError(true)
                                            return setTimeout(() => setError(false), 2500)
                                        }
                                        const lowerCaseJob = job.toLowerCase()
                                        return router.push(`/${formatQueryString(lowerCaseJob)}`)
                                    }}
                                >
                                    <Input
                                        label='Profissão'
                                        placeholder='Insira o cargo desejado aqui'
                                        value={job}
                                        onChange={e => setJob(e.target.value)}
                                    />
                                    <Flex
                                        margin='2rem 0 1rem'
                                    >
                                        <Button
                                            fullWidth
                                            type='submit'
                                            fontSize='1.3rem'
                                            isLoading={isLoading}
                                        >
                                            {error ? 'Tente novamente' : 'Buscar'}
                                        </Button>
                                    </Flex>
                                </form>
                            </Stripe>
                        </Flex>
                    </MainContainer>
                </PageWrapper>
            </>
        )
    }

    return (
        <>
            <Head>
                <title>FreelaCharge</title>
            </Head>
            <PageWrapper>
                <MainContainer>
                    {/* <Flex
                width='100%'
                justifyContent='space-evenly'
                wrap='wrap'
                > */}
                    <Flex
                        padding='0 0 0 5%'
                        column
                        justifyContent='flex-start'
                        alignItems='flex-start'
                    // margin='0 0 2rem'
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
                                    setIsLoading(true)
                                    const lowerCaseJob = job.toLowerCase()
                                    router.push(`/${formatQueryString(lowerCaseJob)}`)
                                }}
                            >
                                <Input
                                    label='Profissão'
                                    placeholder='Insira o cargo desejado aqui'
                                    value={job}
                                    onChange={e => setJob(e.target.value)}
                                />
                                <Flex
                                    margin='2rem 0 1rem'
                                >
                                    <Button
                                        fullWidth
                                        type='submit'
                                        fontSize='1.3rem'
                                        isLoading={isLoading}
                                    >
                                        {error ? 'Tente novamente' : 'Buscar'}
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
            </PageWrapper>
        </>
    )
}

export default Main