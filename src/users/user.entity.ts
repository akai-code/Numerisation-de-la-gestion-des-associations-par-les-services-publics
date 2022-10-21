export class User {
    public id : number;
    public lastname : string;
    public firstname : string;
    constructor(id:number, lastname:string, firstname:string) {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
    }
}