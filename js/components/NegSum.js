function NegativSum(masivas) {
    if (!Array.isArray(masivas)) {
        console.log('Error: duotas ne masivas');
        return false;
    }
    if(masivas.length === 0) {
        console.log('Error: Masivas yra tuscias!');
        return false;
    }
    let sum = 0;
    for( let i = 0; i < masivas.length; i++) {
        const current = masivas[i];
        if (typeof current !== 'number') {
            console.log('Warning: masive yra ne skaicius!')
            continue;
        }
        if(current < 0) {
            sum += current;
        }
    }
    if (!isFinite(sum) || typeof sum !== 'number' ) {
        console.log('Error: Gauta suma nera tikras skaicius!');
        return false;
    }
    
    return sum;
}
export { NegativSum }