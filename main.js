const readline = require("readline");

const ilhamVericiSozler = [
  "Başarı, cesaretle başlar.",
  "Bugün yapabileceğin bir şey için yarını bekleme.",
  "Hayallerine ulaşmak için ilk adımı at.",
  "Her zorluk, bir fırsat taşır.",
  "Başarısızlık, öğrenmenin bir parçasıdır.",
];

const sogukSakalar = [
  "Kar neden çok sessiz? Çünkü bir kar tanesi bile konuşmaz.",
  "Niye kar taneleri hiç kavga etmez? Çünkü her biri farklıdır.",
  "Soğuk havada bir eşeğe neden sarıldım? Isınmak için bir sebep lazımdı.",
  "Buzdolabı neden hep cool? Çünkü her zaman serin takılır.",
  "Soğukta otobüsü bekleyenlere ne denir? Donör.",
  "Kardan adam neden bankada çalışamaz? Çünkü kredisi donmuş!",
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function rastgeleElemanSec(dizi) {
  return dizi[Math.floor(Math.random() * dizi.length)];
}

rl.question(
  "İlham verici sözler mi, soğuk şakalar mı görmek istersiniz? (ilham/şaka): ",
  (cevap) => {
    if (cevap.toLowerCase() === "ilham") {
      console.log("\n" + rastgeleElemanSec(ilhamVericiSozler));
    } else if (cevap.toLowerCase() === "şaka") {
      console.log("\n" + rastgeleElemanSec(sogukSakalar));
    } else {
      console.log(
        "\nGeçersiz bir seçim yaptınız. Lütfen 'ilham' veya 'şaka' yazın."
      );
    }
    rl.close();
  }
);
