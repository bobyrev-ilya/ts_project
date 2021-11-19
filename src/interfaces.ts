interface Rect {
    readonly id: string  // поле только для чтения
    color?: string         // необязательно поле
    size: {
        width: number
        height: number
    }
}

const rect: Rect = {
    id: "1",
    size: {
        width: 1,
        height: 1
    }
};

const rect1 = {} as Rect // приведение типов
const rect2 = <Rect>{} // приведение типов

//==================================

interface RectWithArea extends Rect {
    getArea: () => number
}

//наследование
const rect3: RectWithArea = {
    id: "565",
    size: {
        width: 1,
        height: 2
    },
    getArea() {
        return this.size.width * this.size.height;
    }
}

interface IClock {
    time: Date

    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date) {
        this.time = date;
    }
}

//================================
interface Styles {
    [key: string]: string
}

const css = {
    border: '1 px solid black',
    marginTop: '2px'
}