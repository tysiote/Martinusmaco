function fetchFlyPoolMiner() {
    let url = 'https://api-zcash.flypool.org/miner/t1M5ce7BidrtAyus9f3rdppStyBqbCUJ8Fp/currentStats?miner=';
    return fetch(url, {}).then(function (res) {
        return res.json().then(function(res2) {
            return res2;
        });
    });
}

function fetchFlyPoolWorkers() {
    let url = 'https://api-zcash.flypool.org/miner/t1M5ce7BidrtAyus9f3rdppStyBqbCUJ8Fp/workers?miner=';
    return fetch(url, {}).then(function (res) {
        return res.json().then(function(res2) {
            return res2;
        });
    });
}

function fetchCryptoDB() {
    let url = 'res/crypto.php';
    return fetch(url, {}).then(function (res) {
        return res.json().then(function(res2) {
            return res2;
        });
    });
}