
//delimita o tipo
function concatArray<T>(...itens:   T[]):T[]{
    return Array().concat(...itens);
}


const nums=concatArray<number[]>([1,5],[3]);
const strings=concatArray<string[]>(["oie","hello"],["hey"]);
console.log(nums)
console.log(strings)