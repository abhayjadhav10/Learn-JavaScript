let takeBoolean = Number(prompt('Write 0 or 1'));

let prom1 = new Promise((resolve, reject) => {

    setTimeout(() => {

        if (takeBoolean >= 1) {
            resolve('It is True');
        } else {
            reject('It is False');
        }

    }, 1000);

});

prom1
.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.log(err);
});