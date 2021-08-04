import { StyledButton } from "./styles"
import { useLoading, Puff } from "@agney/react-loading"


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

    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Puff width='50' />
    })

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
                <section { ...containerProps}>{indicatorEl}</section>
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