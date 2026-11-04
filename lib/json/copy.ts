export async function copy(text: string){
    if(!text.trim()){
        throw new Error("Nothing to copy");
    }

    await navigator.clipboard.writeText(text);
}