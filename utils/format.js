

export const formatQueryString = (str) => {

    const splitString = str.split(' ')
    const formattedString = splitString.join('+')

    return formattedString
}

export const reformatString = (str) => {

    const splitString = str.split('+')
    const upperCaseString = splitString.map(substr => substr[0].toUpperCase() + substr.slice(1))
    const formattedString = upperCaseString.join(' ')

    return formattedString
}

export const formatCurrency = (num) => {
    const f = num.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})
    return f
}