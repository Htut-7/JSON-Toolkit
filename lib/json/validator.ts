export function validator(inputData: string){
    try{
        if(!inputData){
            throw new Error("Add JSON data");
        }

        JSON.parse(inputData);

        return true;

    }catch(error){
        throw error;
    }
}