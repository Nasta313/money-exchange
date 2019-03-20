// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var coins = {'H': 50, 'Q': 25, 'D': 10, 'N': 5, 'P': 1};
    var result = {};
    var errObj = {error: "You are rich, my friend! We don't have so much coins for exchange"}
    
    if (currency == 0) {
        return result;
    }
    if (currency > 10000) {
        return errObj;
    }
    if (currency >= coins.H) {
        result.H = Math.floor(currency / coins.H);
        currency = currency % coins.H;
    }
    if (currency >= coins.Q) {
        result.Q = Math.floor(currency / coins.Q);
        currency = currency % coins.Q;
    }
    if (currency >= coins.D) {
        result.D = Math.floor(currency / coins.D);
        currency = currency % coins.D;
    }
    if (currency >= coins.N) {
       result.N = Math.floor(currency / coins.N);
        currency = currency % coins.N;
    }
    if (currency >= coins.P) {
        result.P = currency;
    }
    return result;
}
