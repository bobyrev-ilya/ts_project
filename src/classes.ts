class Typescript{
    // public - protected - private
    version:string
    readonly id: string

    // constructor(id,version) {
    //     this.version = version;
    //     this.id = id;
    //
    // }

    constructor(version: string, id: string) {
    }

    info(name: string){
        return `Hello, ${name}`;
    }
}