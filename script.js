import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Tuliskan URL Anda",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const nama_QR = Math.floor(100 + Math.random() * 900);
    const nama_unik_qr = `qr_image_${nama_QR}.png`;
    const namaFile = `Teks ${nama_QR}.txt`;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(nama_unik_qr));

    fs.writeFile(namaFile, url, (err) => {
      if (err) throw err;
      console.log("Tersimpan");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
