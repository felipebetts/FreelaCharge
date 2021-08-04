import { FooterContainer } from './styles'
import Link from 'next/link'


const Footer = () => {
    return (
        <FooterContainer>
            <p
                style={{
                    color: '#fff'
                }}
            >
                Desenvolvido por <a href='https://github.com/felipebetts' target='_blank' rel='noreferrer'>@felipebetts</a>
            </p>
        </FooterContainer>
    )
}

export default Footer