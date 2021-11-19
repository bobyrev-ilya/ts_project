const isFetching: boolean = true;
const isLoading: boolean = true;

const int: number = 42;
const float: number = 42.3;

const array: number [] = [1, 1, 1, 1];
const array1: Array<number> = [1, 1, 1, 1]; //generic

//Tuple
const Contact: [string, number] = ["name", 30];

//Any
let variable: any = 42;
variable = "test";

function sayMyName(name: string): void {
    console.log(name);
}

//Never (функция с ошибкой или постоянно работающая функция)
function throwError(message: string) : never {
    throw new Error("never")
}

function infinite():never{
    while (true){

    }
}

//Type = собственные типы

