let getIncomeTax = (income) => {
    let inc = Number(income);
    if (inc < 0) return 'error'
    let tax = 0;

    if ( inc > 180000) {
        tax += (inc - 180000) * 0.45;
        inc = 180000;
    }
    if ( inc > 87000 ) {
        tax += (inc - 87000) * 0.37;
        inc = 87000
    }
    if ( inc > 37000) {
        tax += ( inc - 37000 ) * 0.325;
        inc = 37000;
    }
    if (inc > 18200 ) {
        tax += ( inc - 18200) * 0.19;
        inc = 18200;
    }
    return tax;
}

let getSuperAmount = (grossInc, superRate) => {
    let rate = superRate && superRate.match(/[0-9]+/)[0] / 100;
    return Math.round(grossInc * rate);
}



let calculate = (data) => {
    let copy = data.map( x => ({ ...x}) )
    let newData = [];
    data.forEach( (row,i) => {
        let obj = {}
        obj['name'] = row['first-name'] + ' ' + row['last-name'];
        obj['pay-period'] = row['payment-start-date'];
        obj['gross-income'] = Math.round(Number(row['annual-salary']) / 12);
        obj['income-tax'] = Math.round(getIncomeTax( row['annual-salary']) / 12);
        obj['net-income'] = obj['gross-income'] - obj['income-tax'];
        obj['super-amount'] = getSuperAmount(obj['gross-income'], row['super-rate']);
        newData.push(obj)
    })
    return newData;
}

export default calculate;