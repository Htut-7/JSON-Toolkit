export function formatJSON(inputData: string){
    try{
        const input=inputData;

        const parsed=JSON.parse(input);

        return JSON.stringify(parsed,null,4);
    }catch(error){
        throw error;
    }
}