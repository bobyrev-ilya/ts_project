function add(a: number, b: number): number {
    return a + b;
}

interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyPositionDefault extends MyPosition {
    default:string
}

// перегрузка методов

function position(): MyPosition
function position(a:number): MyPositionDefault
function position(a:number,b:number): MyPosition

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x:undefined, y:undefined}
    }
    if(a && !b){
        return {x:a, y:undefined, default: "default"}
    }
    if(a && b){
        return {x:a, b:b}
    }
}

console.log("Empty " + position());
console.log("One " + position(14));
console.log("Two " + position(14, 15));


