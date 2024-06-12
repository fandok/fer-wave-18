// contoh callback dalam callback

const download = (url, callback) => {
  console.log(`Downloading from ${url}....`);

  callback();
};

const url1 = "https://brachio.site/download";
const url2 = "https://trex.site/download";
const url3 = "https://stego.site/download";

download(url1, function () {
  download(url2, function () {
    download(url3, function () {
      console.log("Download complete!");
    });
  });
});
