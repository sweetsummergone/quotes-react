export const getCandles = (currency = "BTCUSDT", interval = 1, timeValue = "h", limit = 20) => {
    return fetch(`https://api.binance.com/api/v1/klines?symbol=${currency}&interval=${interval}${timeValue}&limit=${limit}`)
    .then((response) => {
        return response.json();
    })
    // I will change default Binance numeric keys on my own
    .then(result => {
        return result.map(element => {
            return {
                "openPrice": +element[1],
                "highPrice": +element[2],
                "lowPrice": +element[3],
                "closePrice": +element[4]
            }
        })
    })
    .catch(err => {
        console.log(err);
    })    
}