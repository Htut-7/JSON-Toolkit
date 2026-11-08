export async function download(text: string) {
  if (!text.trim()) {
    throw new Error("Nothing to download");
  }

  const blod = new Blob([text], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blod);

  const link = document.createElement("a");
  link.href = url;
  link.download = "formatted.json";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
