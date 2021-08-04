import { CardContainer } from "./styles"


const Card = ({
    children,
    width,
    height,
    maxWidth,
    minWidth,
    minHeight,
    margin,
    padding
}) => {
    return (
        <CardContainer
            height={height}
            width={width}
            minHeight={minHeight}
            minWidth={minWidth}
            maxWidth={maxWidth}
            margin={margin}
            padding={padding}
        >
            { children }
        </CardContainer>
    )
}

export default Card