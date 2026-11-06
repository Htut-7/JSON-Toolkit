export async function typescriptDownload(text: string){

    if(!text.trim()){
        throw new Error("Nothing to download");
    }

    const blob= new Blob([text],{
        type: "text/typescript",
    });

    const url= URL.createObjectURL(blob);

    const link= document.createElement("a");
    link.href=url;
    link.download="formatted.ts";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);

}