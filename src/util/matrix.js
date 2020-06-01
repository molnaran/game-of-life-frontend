export function getRandomGameOfLife(rows, cols){
    let arr = [];
    for(let i = 0; i < rows; i++) {
        arr[i] = [];
        for(let j = 0; j < cols; j++) {
            arr[i][j] = Math.floor(Math.random()*2) === 1 ? 1: 0;
        }
    }
    return arr;
}
  
export function copyTwoDimArray (twodimarray){  
    return twodimarray.map(function(arr) {
        return arr.slice();
    });
};

export function getClearGameOfLife(rows, cols, defaultValue=0) {
    let arr = [];
    for(let i = 0; i < rows; i++) {
        arr[i] = [];
        for(let j = 0; j < cols; j++) {
            arr[i][j] = defaultValue;
        }
    }
    return arr;
}