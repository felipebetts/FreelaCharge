import { StyledButton } from "./styles"
import Loading from '../Loading'


const Button = ({
    children,
    secondary,
    tertiary,
    closeModal,
    disabled,
    small,
    fontSize,
    fullWidth,
    onClick,
    margin,
    padding,
    isLoading,

}) => {



    if (isLoading) {
        return (
            <StyledButton
                secondary={secondary}
                tertiary={tertiary}
                closeModal={closeModal}
                disabled={disabled}
                small={small}
                fontSize={fontSize}
                fullWidth={fullWidth}
                onClick={onClick}
                margin={margin}
                padding={padding}
            >
                <Loading />
            </StyledButton>
        )
    }

    return (
        <StyledButton
            secondary={secondary}
            tertiary={tertiary}
            closeModal={closeModal}
            disabled={disabled}
            small={small}
            fontSize={fontSize}
            fullWidth={fullWidth}
            onClick={onClick}
            margin={margin}
            padding={padding}
        >
            { children }
        </StyledButton>
    )
}

export default Button