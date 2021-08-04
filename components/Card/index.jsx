import { CardContainer } from "./styles"


const Card = ({
    children,
    width,
    height,
    maxWidth,
    margin,
    padding
}) => {
    return (
        <CardContainer
            width={height}
            width={width}
            maxWidth={maxWidth}
            margin={margin}
            padding={padding}
        >
            { children }
        </CardContainer>
    )
}

export default Card