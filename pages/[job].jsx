import { Flex, MainContainer, Stripe } from "../styles/containers"
import { HourValue, Parag, Title1, Title3, Title4 } from "../styles/text"
import Card from '../components/Card'
import Input from '../components/Input'
import Button from '../components/Button'
import { useEffect, useState } from "react"
import { scrap } from "../services/scrapper"
import Head from 'next/head'
import { useRouter } from "next/router"
import Link from 'next/link'
import { formatCurrency, reformatString } from "../utils/format"
import useWindowDimensions from "../hooks/useWindowDimensions"
import { breakpoints } from "../utils/breakpoints"
import PageWrapper from '../templates/PageWrapper'
import Loading from "../components/Loading"

const JobPage = () => {

    const router = useRouter()

    const { job } = router.query

    const [jobName, setJobName] = useState(null)
    const [jobValue, setJobValue] = useState(null)

    useEffect(() => {
        console.log('job: ', job)
        if (job) {
            setJobName(reformatString(job))
            scrap(job)
                .then(res => {
                    if (res && res.data && res.status === 200) {
                        setJobValue(formatCurrency(parseFloat(res.data)))
                    }
                })
                .catch(err => {
                    console.log('erro: ', err)
                })
        }
    }, [job])

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
                            margin='0 0 2rem'
                        // wrap='wrap'
                        >
                            <Link href='/'>
                                <Title1>
                                    Freela Charge
                                </Title1>
                            </Link>
                            {job && (
                                <>
                                    {jobName && (
                                        <Title4>
                                            Quanto cobrar por hora sendo um {jobName} freelancer
                                        </Title4>
                                    )}
                                </>
                            )}
                        </Flex>
                        <Flex
                            width='100%'
                        >
                            <Stripe
                                minHeight='200px'
                            >
                                {(job && jobName && jobValue) ? (
                                    <Flex
                                        column
                                    >
                                        <Title3>
                                            {jobName}
                                        </Title3>
                                        <HourValue>
                                            {jobValue} / hora
                                        </HourValue>
                                        <Parag
                                            fontSize='0.7rem'
                                            color='neutral400'
                                        >
                                            <i>
                                                *Esse valor é uma média aproximada
                                            </i>
                                        </Parag>
                                        <Button
                                            fullWidth
                                            fontSize='1.3rem'
                                            onClick={() => router.push('/')}
                                        >
                                            Voltar
                                        </Button>
                                    </Flex>
                                ) : (
                                    <Flex>
                                        <Loading />
                                    </Flex>
                                )}
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
                    <Flex
                        padding='0.5rem 0 0 5%'
                        column
                        justifyContent='flex-start'
                        alignItems='flex-start'
                        margin='0 0 2rem'
                    // wrap='wrap'
                    >
                        <Link href='/'>
                            <Title1>
                                Freela Charge
                            </Title1>
                        </Link>
                        {job && (
                            <>
                                {jobName && (
                                    <Title4>
                                        Quanto cobrar por hora sendo um {jobName}
                                    </Title4>
                                )}
                            </>
                        )}
                    </Flex>
                    <Flex
                        width='100%'
                    >
                        <Card
                            minHeight='220px'
                            minWidth='280px'
                        >
                            {(job && jobName && jobValue) ? (
                                <Flex
                                    height='100%'
                                    column
                                    justifyContent='space-evenly'
                                >
                                    <Title3>
                                        {jobName}
                                    </Title3>
                                    <HourValue>
                                        {jobValue} / hora
                                    </HourValue>
                                    <Parag
                                        fontSize='0.7rem'
                                        color='neutral400'
                                    >
                                        <i>
                                            *Esse valor é uma média aproximada
                                        </i>
                                    </Parag>
                                    <Button
                                        fullWidth
                                        fontSize='1.3rem'
                                        onClick={() => router.push('/')}
                                        margin='1rem 0 0'
                                    >
                                        Voltar
                                    </Button>
                                </Flex>
                            ) : (
                                <Flex
                                    height='100%'
                                    column
                                >
                                    <Loading />
                                </Flex>
                            )}
                        </Card>
                    </Flex>
                </MainContainer>
            </PageWrapper>
        </>
    )
}

export default JobPage