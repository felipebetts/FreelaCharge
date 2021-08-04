import { Box, Flex } from "../styles/containers"
import Footer from '../components/Footer'


const PageWrapper = ({ children }) => {
    return (
        <Flex
            column
            height='100%'
            width='100%'
            minHeight='100vh'
            minWidth='100vw'
            justifyContent='space-between'
            >
            <Box
                width='100%'
                
            >
                { children }
            </Box>
            <Footer />
        </Flex>
    )
}

export default PageWrapper