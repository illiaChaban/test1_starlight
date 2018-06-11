let getIncomeTax = (income) => {
    let inc = Number(income);
    if (inc < 0) return 'error'
    if ( inc > 180000) return 54232 + (inc - 180000) * 0.45;
    if ( inc > 87000 ) return 19822 + (inc - 87000) * 0.37;
    if ( inc > 37000) return 3572 + ( inc - 37000 ) * 0.325;
    if (inc > 18200 ) return ( inc - 18200) * 0.19;
    return 0;
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
        if (row) {
            obj['name'] = row['first-name'] + ' ' + row['last-name'];
            obj['pay-period'] = row['payment-start-date'];
            obj['gross-income'] = Math.round(Number(row['annual-salary']) / 12);
            obj['income-tax'] = Math.round(getIncomeTax( row['annual-salary']) / 12);
            obj['net-income'] = obj['gross-income'] - obj['income-tax'];
            obj['super-amount'] = getSuperAmount(obj['gross-income'], row['super-rate']);
        }
        newData.push(obj)
    })
    return newData;
}

export default calculate;