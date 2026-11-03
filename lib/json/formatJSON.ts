export function formatJSON(inputData: string){
    try{
        const input=inputData;

        if(!input.trim()){
            throw new Error("Add JSON data first");
        }

        const parsed=JSON.parse(input);

        return JSON.stringify(parsed,null,4);
    }catch(error){
        throw error;
    }
}