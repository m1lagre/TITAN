type DefaultResponse = {
    id: (string|number),
    name:string,
    createdAt:string
}

type ID = (string|number)
type InputDto = {name:string, active:boolean}

interface Repository{

    readonly model: any;
    findAll(): DefaultResponse[],
    findById(id: ID): DefaultResponse
    insert(data: {name:string, active:boolean}): DefaultResponse
    update(id:ID, data: InputDto ): DefaultResponse
    destrou(id:ID): Boolean
}

class UserRepositoryMySQL implements Repository {
    model: any;

    constructor(model:any){
        this.model = model
    }

    findAll(): DefaultResponse[] {
        throw new Error("Method not implemented.");
    }
    findById(id: ID): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    insert(data: { name: string; active: boolean; }): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    update(id: ID, data: InputDto): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    destrou(id: ID): Boolean {
        throw new Error("Method not implemented.");
    }

}

// const getAllUsers = (repository: Repository): DefaultResponse[] => {
//     return[
//         {id:'any_id'}
//     ]
// }