let punyaBuku = false;

const beliBuku = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      punyaBuku = true;
      resolve();
    }, 1000);
  });

const gambar = (judul) => {
  if (!punyaBuku) return Promise.reject("Gak punya buku");
  return Promise.resolve({
    id: Date.now(),
    title: judul,
    createdAt: Date(),
  });
};

const main = async () => {
  try {
    if (!punyaBuku) await beliBuku();
    const hasilGambar = await gambar("Doraemon");
    console.log(hasilGambar);
  } catch (err) {
    console.log("Beli buku dulu dong");
  }
};

main();
