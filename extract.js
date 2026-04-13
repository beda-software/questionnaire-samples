const file = Bun.file("extract/initBundle.json");
const bundle = await file.json();
for(const e of bundle.entry){
    const r  = e.resource;
    await Bun.write(`extract/${r.id}.json`,JSON.stringify(r, undefined, 4));
}
