function warmerDays(temps) {
    let result = new Array(temps.length).fill(0);
    for(let i=0; i<temps.length; i++) {
        for(let j=i+1; j<temps.length; j++) {
            if(temps[j] > temps[i]) {
                result[i] = j - i;
                break;
            }
        }
    }
    return result;
}