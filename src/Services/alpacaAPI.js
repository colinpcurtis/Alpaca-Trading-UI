import apisauce from 'apisauce'
import config from '../config.js'

const alpacaAPI = () => {
    const api = apisauce.create({
        baseURL: config.baseURL,
        headers: { "APCA-API-KEY-ID": config.KEY, "APCA-API-SECRET-KEY": config.SECRET_KEY },
        timeout: 5000,
    })

    const getAccount = () => api.get('v2/account')
    const getPositions = () => api.get('v2/positions')
    const getOrders = () => api.get("v2/orders")

    return {
        getAccount,
        getPositions,
        getOrders
    }
}



export default alpacaAPI;