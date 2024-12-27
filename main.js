const readline = require("readline");

const inspirationQuotes = [
  "Başarı, cesaretle başlar.",
  "Bugün yapabileceğin bir şey için yarını bekleme.",
  "Hayallerine ulaşmak için ilk adımı at.",
  "Her zorluk, bir fırsat taşır.",
  "Başarısızlık, öğrenmenin bir parçasıdır.",
];

const coldJokes = [
  "Kar neden çok sessiz? Çünkü bir kar tanesi bile konuşmaz.",
  "Niye kar taneleri hiç kavga etmez? Çünkü her biri farklıdır.",
  "Soğuk havada bir eşeğe neden sarıldım? Isınmak için bir sebep lazımdı.",
  "Buzdolabı neden hep cool? Çünkü her zaman serin takılır.",
  "Soğukta otobüsü bekleyenlere ne denir? Donör.",
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

rl.question(
  "İlham verici sözler mi, soğuk şakalar mı görmek istersiniz? (ilham/şaka): ",
  (answer) => {
    if (answer.toLowerCase() === "ilham") {
      console.log("\n" + getRandomElement(inspirationQuotes));
    } else if (answer.toLowerCase() === "şaka") {
      console.log("\n" + getRandomElement(coldJokes));
    } else {
      console.log(
        "\nGeçersiz bir seçim yaptınız. Lütfen 'ilham' veya 'şaka' yazın."
      );
    }
    rl.close();
  }
);
