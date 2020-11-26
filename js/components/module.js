
function module(num1) { // modulio skaiciavimas   Reiksmes su vienu - duoda neigiama zenkla, 
        if(num1 < 0) {  //bet jei minus ant minus lygu pliusas
            return -num1; 
        }
        else {
            return num1;
        }
}
function suma(numberis) {
    let sum = 0;
    for(let i = 0; i < numberis.length ; i++) {
        sum += module(numberis[i]) 
    }
    return sum;
 }
export { suma }
