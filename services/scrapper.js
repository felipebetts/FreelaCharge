import axios from 'axios'
import { formatQueryString } from '../utils/format'

const api = axios.create({
    baseURL: 'http://localhost:4000',
    // timeout: 5000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
})

export const scrap = (job) => {
    const formattedString = formatQueryString(job)

    console.log('formattedString: ', formattedString)

    return api.get(`/${formattedString}`)
        .then(res => {
            console.log('res: ', res)
            return res
        })
}